import Vue from "vue";

export const component = Vue.component("pc-image-list", {
  props: {
    images: {
      type: []
    },
  },
  template: `
    <div class="image">
      <ul>
        <li v-for="image in images">
          <img :src="image" async loading="lazy" />
        </li>
      </ul>
    </div>
  `,
});
