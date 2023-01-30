import Vue from "vue";
import "./main.css";
import "./components/Canvas";
import "./components/Sidebar";
import "./components/ImageList";

var app = new Vue({
  el: "#app",
  data: {
    images: await getImages(),
  },
});

async function getImages(): Promise<string[]> {
  const res = await fetch("/images");
  const images = res.ok && (await res.json());
  return images;
}
