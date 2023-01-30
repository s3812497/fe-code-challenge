# Piktochart front-end code challenge

Hey there, welcome! We are glad to see that you are interested in working with us at Piktochart.

This repository contains a small code challenge to get to know you a bit better, to give you a glimpse of what working at Piktochart could look like and to provide you with an opportunity to know our expectations. Below we have included a section to get started and a section about our evaluation criteria,please be sure to read this whole document before getting started.

We want you to create a mini Piktochart editor for us! This repository is just a suggestion, to save you some work, but feel free to start from zero if you prefer, be sure to document your reason if doing so.

## Getting Started

We've prepared the overall structure of the project for you to get you started. We've also added an Express server to let you upload and retrieve Images. Instructions on how to run and use the server are down below!

### Setup

To set up the environment dependencies

```
$ npm install
```

To run in development mode

```
$ npm run dev
```

Server is listening to port `8000`

### API

#### GET uploaded images

```
GET /images
```

#### POST image to server

```
POST /uploads
```

### Note

- The name of the file input has to be `upload` as the server will look for it in the `multipart` payload.
- The server only accepts `png` and `jpeg` file format.

## Evaluation criteria

This are the things we evaluate:

- **Status**: Is it working?
- **Progress**: How many of the features are implemented?
- **Code**: Is the code clean, structured, well commented?
- **Structure**: How are the files structured? Does files correspond to components?
- **Tests**: Are there any tests? Why?
- **Look n' feel**: How good does it looks? Is it smooth to use?
- **Documentation**: Is there something other developers need to know?
- **Good practices**: This includes git and commits.

### Requirements

These are the features we expect the editor to has:

- [x] Use native HTML element `<div>`, not `<canvas>`.
- [x] User must see the existing images from folder `images` to the images list.
- [] User can _upload image_ to folder `images` and the list must update accordingly.
- [] User can _add image / text_ from the sidebar to the canvas.
- [] User can _move and delete the image / text_ inside the canvas.
- [] The created objects on canvas can be saved and repopulated even if we refresh the browser!

### Notes

- We use mostly Chrome, but we expect it to run in any modern browser.
- We use vue.js, it is not a must but we strongly suggest using it.
- We use typescript, it is not a must but we strongly suggest using it.
- Use as less libraries as possible. It doesn't mean you have to code all yourself, but if you include a library there has to be a good reason for it.

### How to Submit?

We leave it up to you, but you don't really need to get creative on this, we suggest to follow standard practices.

## Contribute

This is a work in progress, it is not part of the challenge itself but if you feel that something is missing or not clear enough, please let us know, we really appreciate it.

---

The most important thing, have fun!

## Production

To build and run in production

```
$ npm run build && npm run prod
```

Server is listening to port `8000`
