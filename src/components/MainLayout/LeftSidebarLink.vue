<template>
  <q-item
    clickable
    tag="a"
    :to="link"
    active-class="q-mx-xs bg-blue-1 text-grey-8"
  >
    <q-item-section class="q-px-md" v-if="icon" avatar>
      <q-icon :name="icon" />
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
