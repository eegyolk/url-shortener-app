<template>
  <q-page class="flex flex-center bg-blue-1">
    <ProcessingComponent v-if="processing" />
    <VerificationFailedComponent
      v-if="!processing && !success"
      :errorMessage="errorMessage"
    />
    <VerificationSuccessComponent
      v-if="!processing && success"
      :emailAddress="emailAddress"
    />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { api } from "boot/axios";
import ProcessingComponent from "components/Verify/ProcessingComponent.vue";
import VerificationFailedComponent from "components/Verify/VerificationFailedComponent.vue";
import VerificationSuccessComponent from "components/Verify/VerificationSuccessComponent.vue";

export default defineComponent({
  name: "VerifyPage",

  components: {
    ProcessingComponent,
    VerificationFailedComponent,
    VerificationSuccessComponent,
  },

  setup() {
    const timeout = ref(null);
    const processing = ref(true);
    const success = ref(false);
    const emailAddress = ref("");
    const errorMessage = ref("");
    const $q = useQuasar();

    const showNotification = (type, message) => {
      $q.notify({
        type,
        position: "top",
        message,
      });
    };

    return {
      timeout,
      processing,
      success,
      emailAddress,
      errorMessage,
      showNotification,

      async onProcessing() {
        try {
          const query = this.$route.query;

          if (
            query.hasOwnProperty("q") &&
            query.q !== null &&
            query.q.length > 0
          ) {
            const response = await api.post("/app/verify", {
              verificationBase64: decodeURIComponent(query.q),
            });

            const { status, errorCode, message, data } = response.data;
            if (status === 0 && errorCode === "ERR-VERIFY-01") {
              success.value = false;
              errorMessage.value = message;
            } else {
              success.value = true;
              emailAddress.value = data.emailAddress;
            }

            this.timeout = setTimeout(() => {
              processing.value = false;
            }, 3000);
          } else {
            window.location.href = "/sign-in";
          }
        } catch (e) {
          showNotification(
            "negative",
            "Something went wrong, please contact our support team. Thank you"
          );
        }
      },
    };
  },

  mounted() {
    this.onProcessing();
  },

  unmounted() {
    clearTimeout(this.timeout);
  },
});
</script>
