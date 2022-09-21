<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card
      v-if="processing"
      class="verify-account-card row no-wrap justify-around items-center"
      flat
    >
      <q-card-section>
        <q-card-section class="flex flex-center">
          <q-circular-progress
            indeterminate
            size="50px"
            color="blue-1"
            track-color="primary"
            class="q-ma-md"
            :thickness="0.2"
          />
        </q-card-section>

        <q-card-section class="flex flex-center q-gutter-md">
          <span
            v-if="systemError"
            class="row no-wrap justify-center text-red text-weight-medium text-body2"
          >
            {{ systemError }}
          </span>

          <p class="text-weight-medium">
            Please wait while we verify your account.
          </p>
        </q-card-section>
      </q-card-section>
    </q-card>

    <VerificationFailedComponent
      v-if="!processing && !success"
      :errorMessage="errorMessage"
    />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { api } from "boot/axios";
import { Cookies } from "quasar";
import crypto from "crypto-js";
import VerificationFailedComponent from "components/AccountRegistry/VerificationFailedComponent.vue";

export default defineComponent({
  name: "VerifyAccountPage",

  components: {
    VerificationFailedComponent,
  },

  setup() {
    const timeout = ref(null);
    const processing = ref(true);
    const success = ref(false);
    const errorMessage = ref("");
    const systemError = ref("");
    const router = useRouter();

    return {
      timeout,
      processing,
      success,
      errorMessage,
      systemError,

      async onProcessing() {
        try {
          const query = this.$route.query;

          if (
            query.hasOwnProperty("q") &&
            query.q !== null &&
            query.q.length > 0
          ) {
            const response = await api.post("/app/verify-account", {
              verificationBase64: decodeURIComponent(query.q),
            });

            const { status, message, data } = response.data;
            if (status === 0) {
              success.value = false;
              errorMessage.value = message;
            } else {
              success.value = true;
            }

            this.timeout = setTimeout(() => {
              processing.value = false;

              if (success.value) {
                const xsrfToken = Cookies.get("XSRF-TOKEN");
                const hash = crypto.AES.encrypt(data.emailAddress, xsrfToken);

                router.replace({
                  path: "/verification-completed",
                  query: { q: encodeURIComponent(hash.toString()) },
                });
              }
            }, 3000);
          } else {
            window.location.href = "/sign-in";
          }
        } catch (e) {
          systemError.value =
            "Something went wrong, please contact our support team";
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

<style lang="scss" scoped>
.verify-account-card {
  width: 452px;
  height: 400px;
  background-color: #fff;
  border: 1px solid $blue-2;
}
</style>
