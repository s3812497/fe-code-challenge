import Vue from "vue";
import { dragoverHandler, dropHandler } from "../drag";

export const component = Vue.component("pc-canvas", {
  methods: {
    dropHandler,
    dragoverHandler
  },
  template: `
    <div class="canvas" v-on:drop="dropHandler" v-on:dragover="dragoverHandler" >
      <div class="block" ></div>
    </div>
  `,
});
