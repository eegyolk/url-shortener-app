import { defineStore } from "pinia";
import { ref } from "vue";

export const useCommonStore = defineStore("commonStore", () => {
  const drawerState = ref(true);
  const miniDrawerState = ref(true);

  function setMiniDrawer(value) {
    miniDrawerState.value = value;
  }

  return { drawerState, miniDrawerState, setMiniDrawer };
});
