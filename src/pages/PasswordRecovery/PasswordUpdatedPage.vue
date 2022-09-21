<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card
      class="password-updated-card row no-wrap justify-around items-center"
      flat
    >
      <q-card-section>
        <q-card-section class="flex flex-center">
          <q-icon size="xl" name="check_circle" color="green" />
        </q-card-section>

        <q-card-section class="flex flex-center">
          <p class="text-h6 text-weight-medium">Password updated!</p>
          <span class="text-center">
            Your password has been changed successfully. Use your new password
            to sign in and don't share it to others.
          </span>
        </q-card-section>

        <q-card-section class="flex flex-center">
          <q-btn
            unelevated
            class="full-width"
            label="Sign in now"
            type="submit"
            color="primary"
            href="/sign-in"
            :no-caps="true"
          />
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PasswordUpdatedPage",

  beforeRouteEnter(to, from) {
    if (to.path !== "/password-updated" || from.path !== "/reset-password") {
      window.location.href = "/sign-in";
    }
  },
});
</script>

<style lang="scss" scoped>
.password-updated-card {
  width: 452px;
  height: 430px;
  background-color: #fff;
  border: 1px solid $blue-2;
}
</style>
