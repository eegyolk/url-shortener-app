<template>
  <q-layout view="lHr Lpr lFr">
    <q-header
      class="row items-center bg-white text-grey-8"
      style="height: 60px"
    >
      <q-toolbar>
        <q-btn
          flat
          @click="toggleMiniDrawerVisibility"
          round
          dense
          color="primary"
          icon="menu"
        />
        <q-toolbar-title class="text-weight-bold">
          {{ $route.meta.title }}
        </q-toolbar-title>

        <q-space />

        <q-btn flat color="primary" label="Upgrade" :no-caps="true" />
        <q-btn flat round color="primary" icon="info" />
        <q-btn flat round color="primary" icon="notifications_active" />
        <q-chip color="blue-1" text-color="grey-8" :dark="false">
          <q-avatar size="md">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          John
        </q-chip>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="bg-primary text-white"
      persistent
      show-if-above
      :mini="miniDrawerVisibility"
      side="left"
    >
      <q-list>
        <q-item
          class="row no-wrap justify-center items-center"
          style="height: 60px"
        >
          <q-item-section avatar>
            <q-icon size="md" name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label
              class="text-h5 text-weight-bold"
              style="letter-spacing: 0.16667em"
            >
              ctrl.ph
            </q-item-label>
          </q-item-section>
        </q-item>

        <LeftSidebarLink
          v-for="link in leftSidebarLinks1"
          :key="link.title"
          v-bind="link"
          :showTooltip="miniDrawerVisibility"
        />

        <div style="position: absolute; bottom: 5px; width: 100%">
          <LeftSidebarLink
            v-for="link in leftSidebarLinks2"
            :key="link.title"
            v-bind="link"
            :showTooltip="miniDrawerVisibility"
          />
        </div>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-blue-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
import { useMainLayoutStore } from "stores/main-layout-store";
import LeftSidebarLink from "components/MainLayout/LeftSidebarLink.vue";

const linksList1 = [
  {
    title: "Dashboard",
    icon: "speed",
    link: "/dashboard",
  },
  {
    title: "Analytics",
    icon: "insights",
    link: "/analytics",
  },
  {
    title: "Links",
    icon: "link",
    link: "/links",
  },
  {
    title: "Domain",
    icon: "domain",
    link: "/domain",
  },
  {
    title: "Tags",
    icon: "sell",
    link: "/tags",
  },
  {
    title: "Channels",
    icon: "podcasts",
    link: "/channels",
  },
  {
    title: "UTM",
    icon: "dynamic_feed",
    link: "/utm",
  },
];

const linksList2 = [
  {
    title: "Profile",
    icon: "person_outline",
    link: "/profile",
  },
  {
    title: "Workspace",
    icon: "groups",
    link: "/workspace",
  },
  {
    title: "Settings",
    icon: "settings",
    link: "/settings",
  },
  {
    title: "Billing",
    icon: "credit_card",
    link: "/billing",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    LeftSidebarLink,
  },

  setup() {
    const mainLayoutStore = useMainLayoutStore();
    const { miniDrawerVisibility } = storeToRefs(mainLayoutStore);
    const { toggleMiniDrawerVisibility } = mainLayoutStore;

    const leftSidebarLinks1 = ref(linksList1);
    const leftSidebarLinks2 = ref(linksList2);

    return {
      miniDrawerVisibility,
      toggleMiniDrawerVisibility,
      leftSidebarLinks1,
      leftSidebarLinks2,
    };
  },
});
</script>
