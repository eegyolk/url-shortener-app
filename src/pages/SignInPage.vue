<template>
  <q-page class="flex flex-center">
    <q-form @submit="onSubmit">
      <div class="flex flex-center q-pb-md" style="width: 380px">
        <p class="text-h5">Sign in to your account</p>
      </div>

      <div class="flex flex-center q-gutter-md q-pb-md">
        <q-btn
          class="q-pa-md"
          text-color="primary"
          icon="fa-brands fa-google"
          :no-caps="true"
          label="Google"
        />

        <q-btn
          class="q-pa-md"
          text-color="primary"
          icon="fa-brands fa-facebook"
          :no-caps="true"
          label="Facebook"
        />

        <q-btn
          class="q-pa-md"
          text-color="primary"
          icon="fa-brands fa-twitter"
          :no-caps="true"
          label="Twitter"
        />
      </div>

      <div class="flex flex-center q-pb-md">
        <q-separator spaced color="grey-3" style="width: 45.8%" />
        <q-avatar size="md" text-color="grey">or</q-avatar>
        <q-separator spaced color="grey-3" style="width: 45.8%" />
      </div>

      <q-input
        outlined
        class="q-pb-md"
        type="email"
        v-model="emailAddress"
        placeholder="Email address"
        :no-error-icon="true"
      />

      <q-input
        outlined
        class="q-pb-md"
        :type="isPwd ? 'password' : 'text'"
        v-model="password"
        placeholder="Password"
        :no-error-icon="true"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="onShowPassword"
          />
        </template>
      </q-input>

      <div class="column q-gutter-md q-pb-md">
        <q-btn
          flat
          label="Forgot password?"
          href="/a/forgot-password"
          color="primary"
          :no-caps="true"
          no-wrap
        />
        <q-btn
          label="Sign in"
          size="lg"
          type="submit"
          color="primary"
          :no-caps="true"
        />
      </div>

      <div class="row no-wrap justify-center items-center q-pt-md">
        <span class="q-pr-xs">Don't have an account yet?</span>
        <q-btn
          flat
          padding="none"
          label="Sign up now"
          href="/a/sign-up"
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
  name: "SignInPage",

  setup() {
    const emailAddress = ref(null);
    const password = ref(null);
    const isPwd = ref(true);
    const accept = ref(false);

    return {
      emailAddress,
      password,
      isPwd,
      accept,

      onSubmit() {
        console.log(123);
      },

      onReset() {
        emailAddress.value = null;
        password.value = null;
        isPwd.value = false;
        accept.value = false;
      },

      onShowPassword() {
        isPwd.value = !isPwd.value;
      },
    };
  },
});
</script>
