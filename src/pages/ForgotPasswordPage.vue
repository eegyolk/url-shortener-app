<template>
  <q-page class="flex flex-center">
    <q-form @submit="onSubmit">
      <div class="flex flex-center q-pb-md" style="width: 380px">
        <p class="text-h5">Forgot your password?</p>

        <span
          >Please enter your email address. We will send you an email to reset
          your password.</span
        >
      </div>

      <q-input
        outlined
        class="q-pb-md"
        type="email"
        v-model="emailAddress"
        placeholder="Email address"
        :no-error-icon="true"
      />

      <div class="column q-gutter-md q-py-md">
        <q-btn
          label="Reset password"
          size="lg"
          type="submit"
          color="primary"
          :no-caps="true"
        />
      </div>

      <div class="row no-wrap justify-center items-center q-py-md">
        <span class="q-pr-xs">Need some help? Please </span>
        <q-btn
          flat
          padding="none"
          label="contact us"
          href="/pages/contact-us"
          color="primary"
          :no-caps="true"
          no-wrap
        />
      </div>

      <div class="row no-wrap justify-center items-center q-pb-md">
        <span class="q-pr-xs">Got your password?</span>
        <q-btn
          flat
          padding="none"
          label="Sign in"
          href="/a/sign-in"
          color="primary"
          :no-caps="true"
          no-wrap
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ForgotPasswordPage",

  setup() {
    const emailAddress = ref(null);
    const accept = ref(false);

    return {
      emailAddress,
      accept,

      onSubmit() {
        console.log(123);
      },

      onReset() {
        emailAddress.value = null;
        accept.value = false;
      },
    };
  },
});
</script>
