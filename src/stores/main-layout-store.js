import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainLayoutStore = defineStore("mainLayout", () => {
  const miniDrawerVisibility = ref(false);

  function toggleMiniDrawerVisibility() {
    miniDrawerVisibility.value = !miniDrawerVisibility.value;
  }

  return { miniDrawerVisibility, toggleMiniDrawerVisibility };
});
