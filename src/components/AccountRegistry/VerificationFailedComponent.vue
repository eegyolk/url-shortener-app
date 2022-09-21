<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card
      class="verification-failed-card row no-wrap justify-around items-center"
      flat
    >
      <q-card-section>
        <q-card-section class="flex flex-center">
          <q-icon size="xl" name="cancel" color="red" />
        </q-card-section>

        <q-card-section class="flex flex-center">
          <p class="text-h6 text-weight-medium">Verification Failed</p>
          <span class="text-center">
            {{ errorMessage }} Not to worry, we can send you a new link again.
          </span>
        </q-card-section>

        <q-card-section class="flex flex-center">
          <q-btn
            unelevated
            class="full-width"
            label="Send new verification link"
            href="/resend-verification"
            type="submit"
            color="primary"
            :no-caps="true"
          />

          <q-btn
            flat
            id="q-btn-sign-in"
            label="Back to sign-in"
            href="/sign-in"
            color="primary"
            padding="xs"
            icon="chevron_left"
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
  name: "VerificationFailedComponent",

  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.verification-failed-card {
  width: 452px;
  height: 400px;
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
