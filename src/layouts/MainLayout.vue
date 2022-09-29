<template>
  <q-layout view="hHh Lpr lff">
    <q-header bordered class="bg-white text-blue-10">
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

        <q-btn unelevated rounded label="Dashboard" to="/dashboard" />
        <q-btn unelevated rounded label="Analytics" to="/analytics" />
        <q-btn unelevated rounded label="Links" to="/links" />
        <q-btn unelevated rounded label="Domains" to="/domains" />
        <q-btn unelevated rounded label="Tags" to="/tags" />
        <q-btn unelevated rounded label="Channels" to="/channels" />
        <q-btn unelevated rounded label="UTM" to="/utm-templates" />
        <q-btn unelevated rounded label="Workspaces" to="/workspaces" />

        <q-space />

        <q-btn unelevated round icon="info" />
        <q-btn unelevated round icon="notifications_active" />

        <q-btn-dropdown
          unelevated
          rounded
          label="My Profile"
          dropdown-icon="arrow_drop_down"
          no-caps
        >
          <q-list>
            <q-item
              class="bg-blue-1"
              style="border-bottom: 1px solid #e4e4e4 !important"
              clickable
              v-close-popup
            >
              <q-item-section class="row no-wrap items-center">
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </q-avatar>

                <span class="q-pt-md text-body2">
                  <strong>{{ fullName }}</strong>
                </span>

                <span class="text-caption">
                  {{ emailAddress }}
                </span>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup class="row no-wrap">
              <q-item-section avatar>
                <q-icon color="primary" name="settings" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Settings</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-icon color="primary" name="credit_card" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Billing</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-close-popup
              @click="onSubmitLogout"
              style="border-top: 1px solid #e4e4e4 !important"
            >
              <q-item-section avatar>
                <q-icon color="primary" name="logout" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <q-page padding>
          <router-view />
        </q-page>
      </div>
      <div class="col-1"></div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useProfileStore } from "src/stores/profile-store";
import { api } from "boot/axios";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const profileStore = useProfileStore();

    const { fullName, emailAddress } = storeToRefs(profileStore);

    return {
      fullName,
      emailAddress,

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
