<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card class="signin-card" flat>
      <q-card-section>
        <q-card-section class="flex flex-center">
          <p class="text-h5 text-weight-medium">Sign in to your account</p>

          <div class="column items-center">
            <div class="col">
              <span class="q-pr-xs">Don't have an account yet?</span>
              <q-btn
                flat
                id="q-btn-sign-up-now"
                label="Sign up now"
                href="/sign-up"
                color="primary"
                padding="none"
                :no-caps="true"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-section class="flex flex-center q-pt-xs q-gutter-md">
          <div class="column items-center">
            <div class="col q-pb-md">
              <span class="q-pr-xs text-weight-medium">Sign in with:</span>
            </div>

            <div class="col q-gutter-md">
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
            </div>
          </div>
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
                :color="emailAddressHasError ? 'red-5' : 'blue'"
              />
            </template>
            <template v-slot:error>
              <span class="text-body2 text-weight-light text-red-5">{{
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
              <q-icon name="key" :color="passwordHasError ? 'red-5' : 'blue'" />
            </template>
            <template v-slot:append>
              <q-icon
                class="cursor-pointer"
                :color="passwordHasError ? 'red-5' : 'blue'"
                :name="isPwd ? 'visibility_off' : 'visibility'"
                @click="onTogglePasswordVisibility"
              />
            </template>
            <template v-slot:error>
              <span class="text-body2 text-weight-light text-red-5">{{
                passwordErrorMsg
              }}</span>
            </template>
          </q-input>
        </q-card-section>

        <q-card-section class="flex flex-center q-py-xs q-pt-md">
          <q-btn
            flat
            id="q-btn-forgot-password"
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
            :disabled="signingIn"
          />
        </q-card-section>

        <q-card-section class="flex flex-center q-pt-md q-pb-md">
          <div class="column items-center">
            <div class="col">
              <span class="q-pr-xs"
                >Didn't receive the verification email?</span
              >
              <q-btn
                flat
                id="q-btn-resend-email"
                label="Resend email"
                href="/resend-email"
                color="primary"
                padding="none"
                :no-caps="true"
              />
            </div>
            <div class="col">
              <span class="q-pr-xs">Need some help? Please</span>
              <q-btn
                flat
                id="q-btn-contact-us"
                label="contact us"
                :href="`${urlShortenerWebLink}/#/contact-us`"
                color="primary"
                padding="none"
                :no-caps="true"
              />
            </div>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { api } from "boot/axios";

export default defineComponent({
  name: "SignInPage",

  setup() {
    const urlShortenerWebProtocol = process.env.URL_SHORTENER_WEB_PROTOCOL;
    const urlShortenerWebDomain = process.env.URL_SHORTENER_WEB_DOMAIN;
    const urlShortenerWebPort = process.env.URL_SHORTENER_WEB_PORT;

    const emailAddress = ref("");
    const emailAddressHasError = ref(false);
    const emailAddressErrorMsg = ref("");
    const password = ref("");
    const passwordHasError = ref(false);
    const passwordErrorMsg = ref("");
    const isPwd = ref(true);
    const signingIn = ref(false);
    const urlShortenerWebLink = ref(
      `${urlShortenerWebProtocol}://${urlShortenerWebDomain}${
        urlShortenerWebPort ? `:${urlShortenerWebPort}` : ""
      }`
    );
    const $q = useQuasar();

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
        if (password.value.length < 8) {
          hasError = passwordHasError.value = true;
          passwordErrorMsg.value =
            "Password must be at least 8 characters long";
        } else {
          hasError = passwordHasError.value = false;
          passwordErrorMsg.value = "";
        }
      }

      return hasError;
    };

    const showNotification = (type, message) => {
      $q.notify({
        type,
        position: "top",
        message,
      });
    };

    return {
      emailAddress,
      emailAddressHasError,
      emailAddressErrorMsg,
      password,
      passwordHasError,
      passwordErrorMsg,
      isPwd,
      signingIn,
      urlShortenerWebLink,
      validateEmailAddressField,
      validatePasswordField,
      showNotification,

      onTogglePasswordVisibility() {
        isPwd.value = !isPwd.value;
      },

      async onSubmitSignIn() {
        let hasError = false;

        signingIn.value = true;

        hasError = validateEmailAddressField();
        hasError = validatePasswordField();

        if (hasError) {
          signingIn.value = false;
          return;
        }

        try {
          const response = await api.post("/app/sign-in", {
            emailAddress: emailAddress.value,
            password: password.value,
          });

          const { status, errorCode, message } = response.data;
          if (
            status === 0 &&
            ["ERR-SIGNIN-01", "ERR-SIGNIN-02", "ERR-SIGNIN-03"].includes(
              errorCode
            )
          ) {
            showNotification("negative", message);
            signingIn.value = false;
            return;
          }

          window.location.href = "/dashboard";
        } catch (e) {
          showNotification(
            "negative",
            "Something went wrong, please contact our support team. Thank you"
          );

          signingIn.value = false;
        }
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
  width: 452px;
  background-color: #fff;
  border: 1px solid $blue-2;
}

#q-btn-sign-up-now,
#q-btn-resend-email,
#q-btn-contact-us {
  padding-bottom: 3px !important;
}
#q-btn-forgot-password.q-hoverable:hover :deep(.q-focus-helper),
#q-btn-sign-up-now.q-hoverable:hover :deep(.q-focus-helper),
#q-btn-resend-email.q-hoverable:hover :deep(.q-focus-helper),
#q-btn-contact-us.q-hoverable:hover :deep(.q-focus-helper) {
  background: none;
  opacity: 0;
}
#q-btn-forgot-password.q-hoverable:hover,
#q-btn-sign-up-now.q-hoverable:hover,
#q-btn-resend-email.q-hoverable:hover,
#q-btn-contact-us.q-hoverable:hover {
  color: $blue-6 !important;
}
</style>
