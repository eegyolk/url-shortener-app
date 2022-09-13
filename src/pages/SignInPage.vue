<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card class="signin-card" flat>
      <q-card-section>
        <q-card-section class="flex flex-center q-pb-xs">
          <p class="text-h5 text-grey-9">Sign in to your account</p>
        </q-card-section>

        <q-card-section class="flex flex-center q-pt-xs q-gutter-md">
          <q-btn
            outline
            text-color="primary"
            icon="fa-brands fa-google"
            label="Google"
            :no-caps="true"
          />

          <q-btn
            outline
            text-color="primary"
            icon="fa-brands fa-facebook"
            label="Facebook"
            :no-caps="true"
          />

          <q-btn
            outline
            text-color="primary"
            icon="fa-brands fa-twitter"
            label="Twitter"
            :no-caps="true"
          />
        </q-card-section>

        <q-card-section class="flex flex-center q-pt-xs">
          <q-separator spaced color="grey-4" style="width: 45.8%" />
          <q-avatar size="md" text-color="grey-6">or</q-avatar>
          <q-separator spaced color="grey-4" style="width: 45.8%" />
        </q-card-section>

        <q-card-section class="q-py-xs q-gutter-md">
          <q-input
            outlined
            dense
            type="email"
            placeholder="Email address"
            v-model="emailAddress"
            hide-bottom-space
            :no-error-icon="true"
            :error="emailAddressHasError"
          >
            <template v-slot:prepend>
              <q-icon
                name="email"
                :color="emailAddressHasError ? 'red-9' : 'grey-7'"
              />
            </template>
            <template v-slot:error>
              <span class="text-body2 text-weight-regular">{{
                emailAddressErrorMsg
              }}</span>
            </template>
          </q-input>

          <q-input
            outlined
            dense
            placeholder="Password"
            v-model="password"
            hide-bottom-space
            :type="isPwd ? 'password' : 'text'"
            :no-error-icon="true"
            :error="passwordHasError"
          >
            <template v-slot:prepend>
              <q-icon
                name="key"
                :color="passwordHasError ? 'red-9' : 'grey-7'"
              />
            </template>
            <template v-slot:append>
              <q-icon
                class="cursor-pointer"
                color="grey-7"
                :name="isPwd ? 'visibility_off' : 'visibility'"
                @click="onTogglePasswordVisibility"
              />
            </template>

            <template v-slot:error>
              <span class="text-body2 text-weight-regular">{{
                passwordErrorMsg
              }}</span>
            </template>
          </q-input>
        </q-card-section>

        <q-card-section class="flex flex-center q-py-xs q-pt-md">
          <q-btn
            flat
            class="q-mb-md"
            label="Forgot password?"
            href="/forgot-password"
            color="primary"
            padding="xs"
            :no-caps="true"
          />
          <q-btn
            unelevated
            class="full-width"
            label="Sign in"
            type="submit"
            color="primary"
            :no-caps="true"
            @click="onSubmitSignIn"
          />
        </q-card-section>

        <q-card-section class="row no-wrap justify-center items-center q-py-xs">
          <span class="q-pr-xs">Don't have an account yet?</span>
          <q-btn
            flat
            padding="xs"
            label="Sign up now"
            href="/sign-up"
            color="primary"
            :no-caps="true"
          />
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { api } from "boot/axios";

export default defineComponent({
  name: "SignInPage",

  setup() {
    const emailAddress = ref("");
    const emailAddressHasError = ref(false);
    const emailAddressErrorMsg = ref("");
    const password = ref("");
    const passwordHasError = ref(false);
    const passwordErrorMsg = ref("");
    const isPwd = ref(true);

    const validateEmailAddressField = () => {
      let hasError = false;

      if (emailAddress.value.length === 0) {
        hasError = emailAddressHasError.value = true;
        emailAddressErrorMsg.value = "This field is required";
      } else {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!reg.test(emailAddress.value)) {
          hasError = emailAddressHasError.value = true;
          emailAddressErrorMsg.value = "Please enter a valid email address";
        } else {
          hasError = emailAddressHasError.value = false;
          emailAddressErrorMsg.value = "";
        }
      }

      return hasError;
    };

    const validatePasswordField = () => {
      let hasError = false;

      if (password.value.length === 0) {
        hasError = passwordHasError.value = true;
        passwordErrorMsg.value = "This field is required";
      } else {
        if (password.value.length < 6) {
          hasError = passwordHasError.value = true;
          passwordErrorMsg.value =
            "Password must be at least 6 characters long";
        } else {
          hasError = passwordHasError.value = false;
          passwordErrorMsg.value = "";
        }
      }

      return hasError;
    };

    return {
      emailAddress,
      emailAddressHasError,
      emailAddressErrorMsg,
      password,
      passwordHasError,
      passwordErrorMsg,
      isPwd,
      validateEmailAddressField,
      validatePasswordField,

      onTogglePasswordVisibility() {
        isPwd.value = !isPwd.value;
      },

      onSubmitSignIn() {
        let hasError = false;

        hasError = validateEmailAddressField();
        hasError = validatePasswordField();

        if (hasError) {
          return;
        }

        // TODO: call api endpoint here
      },
    };
  },

  watch: {
    emailAddress(a, b) {
      this.validateEmailAddressField();
    },
    password(a, b) {
      this.validatePasswordField();
    },
  },
});
</script>

<style lang="scss" scoped>
.signin-card {
  width: 100%;
  max-width: 450px;
  background-color: #fff;
}
</style>
