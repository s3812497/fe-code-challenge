import Vue from "vue";
import { dragstartHandler } from "../drag";

function randomId(key: string) {
  return `${key}-${crypto.getRandomValues(new Uint32Array(2)).join("")}`;
}

export const component = Vue.component("pc-img", {
  props: {
    src: {
      type: String,
    },
    id: {
      type: String,
      default: function () {
        return randomId("img");
      },
    },
  },
  methods: {
    drag: dragstartHandler,
  },
  template: `
    <img :src="src" async loading="lazy" v-on:dragstart="drag" :id="id" />
  `,
});
