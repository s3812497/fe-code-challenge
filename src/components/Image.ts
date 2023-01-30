import Vue from "vue";
import { dragoverHandler, dragstartHandler } from "../drag";

export const component = Vue.component("pc-img", {
  props: {
    src: {
      type: String,
    },
  },
  methods: {
    drag: dragstartHandler,
  },
  template: `
    <img :src="src" async loading="lazy" v-on:dragstart="drag" :id="src" />
  `,
});
