<template>
  <q-layout view="lHh lpR fFf">
    <q-header class="bg-white text-grey-9">
      <q-toolbar class="q-pl-lg">
        <q-toolbar-title class="text-weight-bold">
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer class="bg-primary text-white" show-if-above side="left">
      <q-list>
        <q-item>
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
          v-for="link in leftSidebarLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-blue-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import LeftSidebarLink from "components/MainLayout/LeftSidebarLink.vue";

const linksList = [
  {
    title: "Dashboard",
    icon: "display_settings",
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
    icon: "signpost",
    link: "/channels",
  },
  {
    title: "UTM",
    icon: "schema",
    link: "/utm",
  },
  {
    title: "Workspace",
    icon: "diversity_3",
    link: "/workspace",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    LeftSidebarLink,
  },

  setup() {
    const route = useRoute();

    const title = ref(route.meta.title);

    return {
      leftSidebarLinks: linksList,
      title,
    };
  },
});
</script>
