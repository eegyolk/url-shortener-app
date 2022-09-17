<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card class="verify-card row no-wrap justify-around items-center" flat>
      <q-card-section>
        <q-card-section class="flex flex-center">
          <q-icon
            size="xl"
            :name="success ? 'send' : 'cancel'"
            :color="success ? 'green' : 'red'"
          />
        </q-card-section>

        <q-card-section class="flex flex-center">
          <p class="text-weight-bold">
            {{ success ? "Verification Email Sent" : "Verification Failed" }}
          </p>
          <span v-if="!success" class="text-center">
            {{ errorMessage }}. Not to worry, we can send you a new link again.
          </span>
          <span v-else class="text-center">
            We've sent an email to <strong>{{ emailAddress }}</strong> to verify
            your email address and activate your account. The link in the email
            will expire in 24 hours.
          </span>
        </q-card-section>

        <q-card-section v-if="!success" class="q-py-xs q-gutter-md">
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
            v-if="!success"
            unelevated
            class="full-width"
            label="Send new verification link"
            type="submit"
            color="primary"
            :no-caps="true"
            @click="onSubmitSendNewVerificationLink"
            :disabled="sending"
          />

          <q-btn
            v-if="!success"
            flat
            id="q-btn-sign-in"
            label="Back to sign-in"
            href="/sign-in"
            color="primary"
            padding="xs"
            icon="chevron_left"
            :no-caps="true"
          />

          <q-btn
            v-if="success"
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
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { api } from "boot/axios";

export default defineComponent({
  name: "VerificationFailedComponent",

  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },

  setup() {
    const emailAddress = ref("");
    const emailAddressHasError = ref(false);
    const emailAddressErrorMsg = ref("");
    const sending = ref(false);
    const success = ref(false);
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
      sending,
      success,
      validateEmailAddressField,
      showNotification,

      async onSubmitSendNewVerificationLink() {
        let hasError = false;

        sending.value = true;

        hasError = validateEmailAddressField();

        if (hasError) {
          sending.value = false;
          return;
        }

        try {
          const response = await api.post("/app/send-verif-link", {
            emailAddress: emailAddress.value,
          });

          const { status, message } = response.data;
          if (status === 0) {
            showNotification("negative", message);
            success.value = false;
          } else {
            success.value = true;
          }

          sending.value = false;
        } catch (e) {
          showNotification(
            "negative",
            "Something went wrong, please contact our support team. Thank you"
          );

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
.verify-card {
  width: 450px;
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
