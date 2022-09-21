<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card
      class="resend-completed-card row no-wrap justify-around items-center"
      flat
    >
      <q-card-section>
        <q-card-section class="flex flex-center">
          <q-icon size="xl" name="check_circle" color="green" />
        </q-card-section>

        <q-card-section class="flex flex-center">
          <p class="text-h6 text-weight-medium">Verification Email Sent</p>
          <span class="text-center">
            We've sent an email to <strong>{{ emailAddress }}</strong> to verify
            your email address and activate your account. The link in the email
            will expire in 24 hours.
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
  name: "ResendCompletedPage",

  setup() {
    const emailAddress = ref("");

    return {
      emailAddress,
    };
  },

  beforeRouteEnter(to, from) {
    if (
      to.path !== "/resend-completed" ||
      from.path !== "/resend-verification"
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
.resend-completed-card {
  width: 452px;
  height: 430px;
  background-color: #fff;
  border: 1px solid $blue-2;
}

#q-btn-sign-in {
  padding-top: 5px !important;
}
#q-btn-sign-in.q-hoverable:hover :deep(.q-focus-helper) {
  background: none;
  opacity: 0;
}
#q-btn-sign-in.q-hoverable:hover {
  color: $blue-6 !important;
}
</style>
