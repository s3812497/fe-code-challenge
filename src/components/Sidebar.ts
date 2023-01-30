import Vue from "vue";

export const component = Vue.component("pc-sidebar", {
  template: `
    <div class="assets">
      <slot></slot>
    </div>
  `,
});
