<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card
      class="verification-completed-card row no-wrap justify-around items-center"
      flat
    >
      <q-card-section>
        <q-card-section class="flex flex-center">
          <q-icon size="xl" name="check_circle" color="green" />
        </q-card-section>

        <q-card-section class="flex flex-center">
          <p class="text-h6 text-weight-medium">Your account is verified.</p>
          <span class="text-center">
            The address <strong>{{ emailAddress }}</strong> is now a confirmed
            account. Thanks for helping us keeping your account secure.
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
import { defineComponent, ref } from "vue";
import { Cookies } from "quasar";
import crypto from "crypto-js";

export default defineComponent({
  name: "VerificationCompletedPage",

  setup() {
    const emailAddress = ref("");

    return {
      emailAddress,
    };
  },

  beforeRouteEnter(to, from) {
    if (
      to.path !== "/verification-completed" ||
      from.path !== "/verify-account"
    ) {
      window.location.href = "/sign-in";
    }
  },

  mounted() {
    const { query } = this.$route;
    const xsrfToken = Cookies.get("XSRF-TOKEN");

    const hash = crypto.AES.decrypt(decodeURIComponent(query.q), xsrfToken);
    this.emailAddress = hash.toString(crypto.enc.Utf8);
  },
});
</script>

<style lang="scss" scoped>
.verification-completed-card {
  width: 452px;
  height: 430px;
  background-color: #fff;
  border: 1px solid $blue-2;
}
</style>
