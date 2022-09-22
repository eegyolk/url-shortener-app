<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-white text-blue-10">
      <q-toolbar class="q-py-md q-pl-lg q-gutter-xs">
        <q-toolbar-title class="row no-wrap items-center">
          <img
            src="https://app.utm.io/a676bd1b63aa6e9a.png"
            alt="umt.io"
            style="width: 32px"
          />
          <span
            class="q-pl-sm text-weight-medium text-overline"
            style="font-size: 1.1rem"
            >logo.io</span
          >
        </q-toolbar-title>

        <q-space />

        <q-btn flat label="Upgrade" no-caps />
        <q-btn flat round icon="info" />
        <q-btn flat round icon="notifications_active" />

        <q-btn-dropdown
          flat
          label="My Profile"
          dropdown-icon="arrow_drop_down"
          no-caps
        >
          <q-list>
            <q-item class="bg-blue-1" v-close-popup>
              <q-item-section class="row no-wrap items-center">
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </q-avatar>
                <strong>{{ fullName }}</strong>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Videos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onSubmitLogout">
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawerState"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-blue-10"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <LeftSidebarLinkComponent
            v-for="link in leftSidebarLinks1"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
import { useProfileStore } from "src/stores/profile-store";
import { api } from "boot/axios";
import LeftSidebarLinkComponent from "components/MainLayout/LeftSidebarLinkComponent.vue";

const linksList1 = [
  {
    title: "Dashboard",
    icon: "grid_view",
    link: "/dashboard",
    rotate: "",
  },
  {
    title: "Analytics",
    icon: "insights",
    link: "/analytics",
    rotate: "",
  },
  {
    title: "Links",
    icon: "link",
    link: "/links",
    rotate: "rotate-135",
  },
  {
    title: "Domain",
    icon: "domain",
    link: "/domain",
    rotate: "",
  },
  {
    title: "Tags",
    icon: "sell",
    link: "/tags",
    rotate: "rotate-90",
  },
  {
    title: "Channels",
    icon: "podcasts",
    link: "/channels",
    rotate: "rotate-225",
  },
  {
    title: "UTM",
    icon: "assessment",
    link: "/utm",
    rotate: "",
  },
  {
    title: "Profile",
    icon: "account_circle",
    link: "/profile",
    rotate: "",
  },
  {
    title: "Workspace",
    icon: "groups",
    link: "/workspace",
    rotate: "",
  },
  {
    title: "Settings",
    icon: "settings",
    link: "/settings",
    rotate: "",
  },
  {
    title: "Billing",
    icon: "credit_card",
    link: "/billing",
    rotate: "",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: { LeftSidebarLinkComponent },

  setup() {
    const leftSidebarLinks1 = ref(linksList1);

    const profileStore = useProfileStore();

    const { fullName } = storeToRefs(profileStore);

    return {
      leftSidebarLinks1,
      fullName,

      async onSubmitLogout() {
        try {
          const response = await api.post("/app/sign-out");
          window.location.href = "/sign-in";
        } catch (e) {
          console.error(e);
        }
      },
    };
  },
});
</script>
