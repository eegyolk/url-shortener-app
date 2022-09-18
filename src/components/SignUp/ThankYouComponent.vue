<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card class="signup-card row no-wrap justify-around items-center" flat>
      <q-card-section>
        <q-card-section class="flex flex-center">
          <q-icon size="xl" name="mark_email_read" color="green" />
        </q-card-section>

        <q-card-section class="flex flex-center">
          <p class="text-h6 text-weight-medium">Thanks for signing up!</p>
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "ThankYouComponent",

  props: {
    emailAddress: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.signup-card {
  width: 452px;
  height: 400px;
  background-color: #fff;
  border: 1px solid $blue-2;
}
</style>
