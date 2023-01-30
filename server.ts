import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { createServer as createViteServer, ViteDevServer } from "vite";
import multer from "multer";
import { not as isNotJunk } from "junk";

const production = process.env.NODE_ENV === "production";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // Configure Multer Middleware and Storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname + "/images");
    },
    filename: (req, file, cb) => {
      const ext = file.originalname.split(".").slice(-1);
      cb(null, "uploads-" + Date.now() + "." + ext);
    },
  });

  const fileFilter = (
    req: Express.Request,
    file: Express.Multer.File,
    cb: any
  ) => {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
      cb(null, true);
    } else {
      cb("Failed: format not supported");
    }
  };

  const uploadMiddleware = multer({ storage, fileFilter }).single("upload");

  // Integrating Vite with Express
  // https://vitejs.dev/guide/ssr.html
  // https://www.peterweightman.com/posts/2021-05-16-vite-express-server/
  let vite: ViteDevServer;
  if (!production) {
    // Create Vite server in middleware mode and configure the app type as
    // 'custom', disabling Vite's own HTML serving logic so parent server
    // can take control
    vite = await createViteServer({
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
      },
      appType: "custom",
    });

    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  }

  app.use(express.static("./images"));

  app.post("/uploads", (req, res) => {
    uploadMiddleware(req, res, (err) => {
      if (err || !req.file) {
        console.error(err);
        res.status(400).json({
          message: err,
        });
      } else {
        res.status(200).json({
          file:
            req.protocol +
            "://" +
            req.get("host") +
            "/images/" +
            req.file.filename,
        });
      }
    });
  });

  app.get("/images", (req, res) => {
    const filePath = req.protocol + "://" + req.get("host") + "/images/";
    const files = fs
      .readdirSync(__dirname + "/images")
      .filter(isNotJunk) // remove .DS_STORE etc
      .map((url) => filePath + url); // map with url path
    res.json(files);
  });

  if (production) {
    app.use("/", express.static(__dirname + "/dist"));
  }

  app.get("/", async (req, res) => {
    const url = req.originalUrl;

    try {
      let html = fs.readFileSync(
        path.resolve(__dirname, production ? "dist/index.html" : "index.html"),
        "utf-8"
      );

      if (!production) {
        // Apply Vite HTML transforms. This injects the Vite HMR client, and
        // also applies HTML transforms from Vite plugins
        html = await vite.transformIndexHtml(url, html);
      }

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e as Error);
    }
  });

  const port = 5173;
  app.listen(port, () => {
    console.log(`Server started. Listening to port ${port}`);
  });
}

createServer();
