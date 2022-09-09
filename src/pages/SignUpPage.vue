<template>
  <q-page class="flex flex-center">
    <q-form @submit="onSubmit">
      <div class="flex flex-center q-pt-md" style="width: 380px">
        <p class="text-h5">Create your new account</p>
      </div>

      <div class="flex flex-center q-gutter-md q-py-md">
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
        type="text"
        v-model="username"
        placeholder="Username"
        :no-error-icon="true"
      />

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
          <q-btn
            round
            flat
            color="grey"
            icon="fa-solid fa-circle-question"
            padding="none"
          >
            <q-popup-proxy :offset="[10, 10]">
              <q-list dense bordered class="rounded-borders">
                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label>Password requirements:</q-item-label>
                    <q-item-label caption
                      >- At least one lower case letter</q-item-label
                    >
                    <q-item-label caption
                      >- At least one upper case letter
                    </q-item-label>
                    <q-item-label caption>- At least one numeric </q-item-label>
                    <q-item-label caption
                      >- At least one special character
                    </q-item-label>
                    <q-item-label caption>- Minimum 8 characters</q-item-label>
                    <q-item-label caption>- Maximum 20 characters</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-popup-proxy>
          </q-btn>
        </template>
      </q-input>

      <div class="column q-py-md">
        <q-btn
          label="Sign up now"
          size="lg"
          type="submit"
          color="primary"
          :no-caps="true"
        />
      </div>

      <div class="flex flex-center q-pt-md">
        <span>By creating an account you agree to</span>
      </div>

      <div class="row no-wrap justify-center items-center q-pb-md">
        <span class="q-pr-xs">our</span>
        <q-btn
          flat
          padding="none"
          label="Terms & Conditions"
          href="/pages/terms-and-conditions"
          color="primary"
          :no-caps="true"
          no-wrap
        />
        <span class="q-px-xs">and</span>
        <q-btn
          flat
          padding="none"
          label="Privacy Policy"
          href="/pages/privacy-policy"
          color="primary"
          :no-caps="true"
          no-wrap
        />.
      </div>

      <div class="row no-wrap justify-center items-center q-pb-md">
        <span class="q-pr-xs">Already have an account?</span>
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
  name: "SignUpPage",

  setup() {
    const username = ref(null);
    const emailAddress = ref(null);
    const password = ref(null);
    const isPwd = ref(true);
    const accept = ref(false);

    return {
      username,
      emailAddress,
      password,
      isPwd,
      accept,

      onSubmit() {
        console.log(123);
      },

      onReset() {
        username.value = null;
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
