<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card class="verify-card row no-wrap justify-around items-center" flat>
      <q-card-section>
        <q-card-section class="flex flex-center">
          <q-icon size="xl" name="check_circle" color="green" />
        </q-card-section>

        <q-card-section class="flex flex-center">
          <p class="text-weight-bold">Your account is verified.</p>
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "VerificationSuccessComponent",

  props: {
    emailAddress: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.verify-card {
  width: 452px;
  height: 400px;
  background-color: #fff;
  border: 1px solid $blue-2;
}
</style>
