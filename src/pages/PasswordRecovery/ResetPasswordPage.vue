<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card
      class="reset-password-card row no-wrap justify-around items-center"
      flat
    >
      <q-card-section>
        <q-card-section class="flex flex-center">
          <q-icon size="xl" name="lock" color="red" />
        </q-card-section>

        <q-card-section class="flex flex-center">
          <p class="text-h6 text-weight-medium">Reset your password</p>
          <span class="text-center">
            Thanks for helping us keeping your account secure.
          </span>
        </q-card-section>

        <q-card-section class="q-py-xs q-gutter-md">
          <span
            v-if="systemError"
            class="row no-wrap justify-center text-red text-weight-medium text-body2"
          >
            {{ systemError }}
          </span>

          <q-input
            outlined
            dense
            placeholder="Password"
            v-model="password"
            hide-bottom-space
            :type="isPwd ? 'password' : 'text'"
            :no-error-icon="true"
            :error="passwordsHasError"
          >
            <template v-slot:prepend>
              <q-icon
                name="key"
                :color="passwordsHasError ? 'red-5' : 'blue'"
              />
            </template>
            <template v-slot:append>
              <q-icon
                class="cursor-pointer"
                :color="passwordsHasError ? 'red-5' : 'blue'"
                :name="isPwd ? 'visibility_off' : 'visibility'"
                @click="onTogglePasswordVisibility"
              />
            </template>
          </q-input>

          <q-input
            outlined
            dense
            placeholder="Confirm password"
            v-model="confirmPassword"
            hide-bottom-space
            :type="isConfirmPwd ? 'password' : 'text'"
            :no-error-icon="true"
            :error="passwordsHasError"
          >
            <template v-slot:prepend>
              <q-icon
                name="key"
                :color="passwordsHasError ? 'red-5' : 'blue'"
              />
            </template>
            <template v-slot:append>
              <q-icon
                class="cursor-pointer"
                :color="passwordsHasError ? 'red-5' : 'blue'"
                :name="isConfirmPwd ? 'visibility_off' : 'visibility'"
                @click="onToggleConfirmPasswordVisibility"
              />
            </template>
          </q-input>
        </q-card-section>

        <q-card-section class="q-py-xs q-gutter-md">
          <q-list dense>
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
        </q-card-section>

        <q-card-section class="flex flex-center">
          <q-btn
            unelevated
            class="full-width"
            label="Reset password"
            type="submit"
            color="primary"
            :no-caps="true"
            @click="onSubmitResetPassword"
            :disabled="resetting"
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
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { api } from "boot/axios";

const passwordRuleSet = [
  { passed: false, label: "Password is required", regex: /.{1,}/, field: 1 },
  {
    passed: false,
    label: "Confirm password is required",
    regex: /.{1,}/,
    field: 2,
  },
  { passed: false, label: "Passwords should match", regex: null, field: 3 },
  {
    passed: false,
    label: "At least 8 characters long",
    regex: /.{8,}/,
    field: 1,
  },
  { passed: false, label: "At least 1 uppercase", regex: /[A-Z]/, field: 1 },
  { passed: false, label: "At least 1 lowercase", regex: /[a-z]/, field: 1 },
  { passed: false, label: "At least 1 numeric", regex: /\d/, field: 1 },
  {
    passed: false,
    label: "At least 1 special character",
    regex: /\W/,
    field: 1,
  },
];

export default defineComponent({
  name: "ResetPasswordPage",

  setup() {
    const resetBase64 = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const passwordsHasError = ref(false);
    const isPwd = ref(true);
    const isConfirmPwd = ref(true);
    const passwordRules = ref(passwordRuleSet);
    const resetting = ref(false);
    const systemError = ref("");
    const router = useRouter();

    const validatePasswordFields = () => {
      let hasError = false;

      passwordRules.value.forEach((rule) => {
        if (rule.field === 1) {
          rule.passed = rule.regex.test(password.value);
        } else if (rule.field === 2) {
          rule.passed = rule.regex.test(confirmPassword.value);
        } else if (rule.field === 3) {
          rule.passed = false;
        }
      });

      const foundFailed = passwordRules.value.findIndex(
        (item) => !item.passed && item.field !== 3
      );
      if (foundFailed >= 0) {
        hasError = passwordsHasError.value = true;
      } else {
        hasError = passwordsHasError.value = false;
      }

      if (foundFailed < 0) {
        const foundField3 = passwordRules.value.findIndex(
          (item) => item.field === 3
        );
        if (foundField3) {
          if (password.value === confirmPassword.value) {
            passwordRules.value[foundField3].passed = true;
            hasError = passwordsHasError.value = false;
          } else {
            passwordRules.value[foundField3].passed = false;
            hasError = passwordsHasError.value = true;
          }
        }
      }

      return hasError;
    };

    return {
      resetBase64,
      password,
      confirmPassword,
      passwordsHasError,
      isPwd,
      isConfirmPwd,
      passwordRules,
      resetting,
      systemError,
      validatePasswordFields,

      onTogglePasswordVisibility() {
        isPwd.value = !isPwd.value;
      },
      onToggleConfirmPasswordVisibility() {
        isConfirmPwd.value = !isConfirmPwd.value;
      },

      async onSubmitResetPassword() {
        let hasError = false;

        resetting.value = true;

        hasError = validatePasswordFields();

        if (hasError) {
          resetting.value = false;
          return;
        }

        try {
          const response = await api.post("/app/reset-password", {
            resetBase64: decodeURIComponent(resetBase64.value),
            password: password.value,
            password_confirmation: confirmPassword.value,
          });

          const { status, message } = response.data;
          if (status === 0) {
            systemError.value = message;
            resetting.value = false;
          } else {
            router.replace("/password-updated");
          }
        } catch (e) {
          systemError.value =
            "Something went wrong, please contact our support team";
          resetting.value = false;
        }
      },
    };
  },

  mounted() {
    const query = this.$route.query;

    if (query.hasOwnProperty("q") && query.q !== null && query.q.length > 0) {
      this.resetBase64 = query.q;
    } else {
      window.location.href = "/sign-in";
    }
  },

  watch: {
    password(a, b) {
      this.validatePasswordFields();
    },
    confirmPassword(a, b) {
      this.validatePasswordFields();
    },
  },
});
</script>

<style lang="scss" scoped>
.reset-password-card {
  width: 452px;
  background-color: #fff;
  border: 1px solid $blue-2;
}

.q-item:nth-child(1),
.q-item--dense {
  padding-top: 10px;
}
.q-item,
.q-item--dense {
  min-height: 100%;
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
