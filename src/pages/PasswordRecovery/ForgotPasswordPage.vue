<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card
      class="forgot-password-card row no-wrap justify-around items-center"
      flat
    >
      <q-card-section>
        <q-card-section class="flex flex-center">
          <q-icon size="xl" name="lock" color="red" />
        </q-card-section>

        <q-card-section class="flex flex-center">
          <p class="text-h6 text-weight-medium">Forgot your password?</p>
          <span class="text-center">
            Please enter your email address. We will send you an email
            instructions to reset your password.
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
            :disabled="sending"
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
import { Cookies } from "quasar";
import { api } from "boot/axios";
import crypto from "crypto-js";

export default defineComponent({
  name: "ForgotPasswordPage",

  setup() {
    const emailAddress = ref("");
    const emailAddressHasError = ref(false);
    const emailAddressErrorMsg = ref("");
    const sending = ref(false);
    const systemError = ref("");
    const router = useRouter();

    const validateEmailAddressField = () => {
      let hasError = false;

      systemError.value = "";

      if (emailAddress.value.length === 0) {
        hasError = emailAddressHasError.value = true;
        emailAddressErrorMsg.value = "This field is required.";
      } else {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!reg.test(emailAddress.value)) {
          hasError = emailAddressHasError.value = true;
          emailAddressErrorMsg.value = "Please enter a valid email address.";
        } else {
          hasError = emailAddressHasError.value = false;
          emailAddressErrorMsg.value = "";
        }
      }

      return hasError;
    };

    return {
      emailAddress,
      emailAddressHasError,
      emailAddressErrorMsg,
      sending,
      systemError,
      validateEmailAddressField,

      async onSubmitResetPassword() {
        let hasError = false;

        sending.value = true;

        hasError = validateEmailAddressField();

        if (hasError) {
          sending.value = false;
          return;
        }

        try {
          const response = await api.post("/app/forgot-password", {
            emailAddress: emailAddress.value,
          });

          const { status, message } = response.data;
          if (status === 0) {
            systemError.value = message;
            sending.value = false;
          } else {
            const xsrfToken = Cookies.get("XSRF-TOKEN");
            const hash = crypto.AES.encrypt(emailAddress.value, xsrfToken);

            router.replace({
              path: "/recovery-emailed",
              query: { q: encodeURIComponent(hash.toString()) },
            });
          }
        } catch (e) {
          systemError.value =
            "Something went wrong, please contact our support team.";
          sending.value = false;
        }
      },
    };
  },

  watch: {
    emailAddress(a, b) {
      this.validateEmailAddressField();
    },
  },
});
</script>

<style lang="scss" scoped>
.forgot-password-card {
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
