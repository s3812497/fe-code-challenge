import Vue from "vue";
import "./Image";

export const component = Vue.component("pc-image-list", {
  props: {
    images: {
      type: [],
    },
  },
  template: `
    <div class="image">
      <ul>
        <li v-for="image in images">
          <pc-img :src="image"></pc-img>
        </li>
      </ul>
    </div>
  `,
});
