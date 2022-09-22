<template>
  <q-item clickable dark v-ripple tag="a" :to="link" active-class="bg-blue-9">
    <q-item-section v-if="icon" avatar>
      <q-icon :class="rotate" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LeftSidebarLinkComponent",

  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },

    rotate: {
      type: String,
      default: "",
    },
  },
});
</script>
