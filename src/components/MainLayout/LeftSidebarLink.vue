<template>
  <q-item
    clickable
    dark
    tag="a"
    :to="link"
    active-class="text-weight-bolder rounded-borders"
  >
    <q-item-section class="q-px-md" v-if="icon" avatar>
      <q-icon :size="title === $route.meta.title ? 'md' : 'sm'" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>

    <q-tooltip v-if="showTooltip" anchor="center end" self="center end">
      {{ title }}
    </q-tooltip>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LeftSidebarLink",
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

    showTooltip: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
