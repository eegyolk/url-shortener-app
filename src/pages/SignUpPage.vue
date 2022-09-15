<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card class="signup-card" flat>
      <q-card-section>
        <q-card-section class="flex flex-center q-pb-xs">
          <p class="text-h5 text-grey-9">Create new account</p>
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
            placeholder="Full name"
            v-model="fullName"
            hide-bottom-space
            :no-error-icon="true"
            :error="fullNameHasError"
          >
            <template v-slot:prepend>
              <q-icon
                name="account_circle"
                :color="fullNameHasError ? 'red-5' : 'blue'"
              />
            </template>
            <template v-slot:error>
              <span class="text-body2 text-weight-light text-red-5">{{
                fullNameErrorMsg
              }}</span>
            </template>
          </q-input>

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
            maxlength="20"
            :type="isPwd ? 'password' : 'text'"
            :no-error-icon="true"
            :error="passwordHasError"
            class="no-padding"
            data-lpignore="true"
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
              <q-list
                dense
                class="bg-red-1"
                style="border: 1px solid red; border-top: 0"
              >
                <q-item v-for="(rules, index) in passwordRules" :key="index">
                  <q-item-section side>
                    <q-icon
                      size="xs"
                      :color="rules.passed ? 'green' : 'red'"
                      :name="rules.passed ? 'check' : 'cancel'"
                    />
                  </q-item-section>
                  <q-item-section
                    :class="[
                      'text-body2',
                      'text-weight-light',
                      rules.passed ? 'text-green' : 'text-red',
                    ]"
                  >
                    {{ rules.label }}
                  </q-item-section>
                </q-item>
              </q-list>
            </template>
          </q-input>
        </q-card-section>

        <q-card-section class="flex flex-center q-pt-lg q-pb-md">
          <q-btn
            unelevated
            class="full-width"
            label="Sign up now"
            type="submit"
            color="primary"
            :no-caps="true"
            @click="onSubmitSignUp"
            :disabled="signingUp"
          />
        </q-card-section>

        <q-card-section class="q-py-xs">
          <div class="flex flex-center">
            <span>By creating an account you agree to</span>
          </div>

          <div class="row no-wrap justify-center items-center">
            <span class="q-pr-xs">our</span>
            <q-btn
              flat
              padding="none"
              label="Terms & Conditions"
              :href="`${urlShortenerWebLink}/#/terms-and-conditions`"
              target="_blank"
              color="primary"
              :no-caps="true"
              no-wrap
            />
            <span class="q-px-xs">and</span>
            <q-btn
              flat
              padding="xs"
              label="Privacy Policy"
              :href="`${urlShortenerWebLink}/#/privacy-policy`"
              target="_blank"
              color="primary"
              :no-caps="true"
              no-wrap
            />.
          </div>
        </q-card-section>

        <q-card-section
          class="row no-wrap justify-center items-center q-pt-xs q-pb-md"
        >
          <span class="q-pr-xs">Already have an account?</span>
          <q-btn
            flat
            padding="xs"
            label="Sign in"
            href="/sign-in"
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
import { useQuasar } from "quasar";
import { api } from "boot/axios";

const passwordRuleSet = [
  { passed: false, label: "Password is required", regex: /.{1,}/ },
  { passed: false, label: "At least 8 characters long", regex: /.{8,}/ },
  { passed: false, label: "At least 1 uppercase", regex: /[A-Z]/ },
  { passed: false, label: "At least 1 lowercase", regex: /[a-z]/ },
  { passed: false, label: "At least 1 numeric", regex: /\d/ },
  { passed: false, label: "At least 1 special character", regex: /\W/ },
];

export default defineComponent({
  name: "SignUpPage",

  setup() {
    const urlShortenerWebProtocol = process.env.URL_SHORTENER_WEB_PROTOCOL;
    const urlShortenerWebDomain = process.env.URL_SHORTENER_WEB_DOMAIN;
    const urlShortenerWebPort = process.env.URL_SHORTENER_WEB_PORT;
    const fullName = ref("");
    const fullNameHasError = ref(false);
    const fullNameErrorMsg = ref("");
    const emailAddress = ref("");
    const emailAddressHasError = ref(false);
    const emailAddressErrorMsg = ref("");
    const password = ref("");
    const passwordHasError = ref(false);
    const passwordRules = ref(passwordRuleSet);
    const isPwd = ref(true);
    const signingUp = ref(false);
    const urlShortenerWebLink = ref(
      `${urlShortenerWebProtocol}://${urlShortenerWebDomain}${
        urlShortenerWebPort ? `:${urlShortenerWebPort}` : ""
      }`
    );
    const $q = useQuasar();

    const validateFullNameField = () => {
      let hasError = false;

      if (fullName.value.length === 0) {
        hasError = fullNameHasError.value = true;
        fullNameErrorMsg.value = "This field is required";
      } else {
        const reg = /.{3,}/;
        if (!reg.test(fullName.value)) {
          hasError = fullNameHasError.value = true;
          fullNameErrorMsg.value = "Please enter at least 3 character name";
        } else {
          hasError = fullNameHasError.value = false;
          fullNameErrorMsg.value = "";
        }
      }

      return hasError;
    };

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

      passwordRules.value.forEach((rule) => {
        rule.passed = rule.regex.test(password.value);
      });

      const foundFailed = passwordRules.value.findIndex((item) => !item.passed);
      if (foundFailed >= 0) {
        hasError = passwordHasError.value = true;
      } else {
        hasError = passwordHasError.value = false;
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
      fullName,
      fullNameHasError,
      fullNameErrorMsg,
      emailAddress,
      emailAddressHasError,
      emailAddressErrorMsg,
      password,
      passwordHasError,
      passwordRules,
      isPwd,
      signingUp,
      urlShortenerWebLink,
      validateFullNameField,
      validateEmailAddressField,
      validatePasswordField,
      showNotification,

      onTogglePasswordVisibility() {
        isPwd.value = !isPwd.value;
      },

      async onSubmitSignUp() {
        let hasError = false;

        signingUp.value = true;

        hasError = validateFullNameField();
        hasError = validateEmailAddressField();
        hasError = validatePasswordField();

        if (hasError) {
          signingUp.value = false;
          return;
        }

        try {
          // const response = await api.post("/app/sign-in", {
          //   password: password.value,
          //   emailAddress: emailAddress.value,
          // });

          // const { status, errorCode, message } = response.data;
          // if (status === 0 && errorCode === "ERR-SIGNIN-01") {
          //   showNotification("negative", message);
          signingUp.value = false;
          //   return;
          // } else if (status === 0 && errorCode === "ERR-SIGNIN-02") {
          //   window.location.href = "/reactivate-account";
          //   return;
          // }

          // window.location.href = "/dashboard";
        } catch (e) {
          showNotification(
            "negative",
            "Something went wrong, please contact our support team. Thank you"
          );
          signingUp.value = false;
        }
      },
    };
  },

  watch: {
    fullName(a, b) {
      this.validateFullNameField();
    },
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
.signup-card {
  width: 100%;
  max-width: 452px;
  background-color: #fff;
  border: 1px solid $blue-2;
}

.q-field--error:nth-child(3) :deep(.q-field__control) {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.q-field:nth-child(3) :deep(.q-field__bottom) {
  padding: 0;
}
</style>
