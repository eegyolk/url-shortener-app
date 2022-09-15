<template>
  <q-page class="flex flex-center">
    <q-form @submit="onSubmit">
      <div class="flex flex-center q-pb-md" style="width: 380px">
        <p class="text-h5">Reactivate account</p>

        <span>
          Please enter your email address. We will send you account reactivation
          instructions.
        </span>
      </div>

      <q-input
        outlined
        class="q-pb-md"
        type="email"
        v-model="emailAddress"
        placeholder="Email address"
        :no-error-icon="true"
      />

      <div class="column q-gutter-md q-py-md">
        <q-btn
          label="Email instructions"
          size="lg"
          type="submit"
          color="primary"
          :no-caps="true"
        />
      </div>

      <div class="row no-wrap justify-center items-center q-py-md">
        <span class="q-pr-xs">Need some help? Please </span>
        <q-btn
          flat
          padding="none"
          label="contact us"
          :href="`${urlShortenerWebLink}/#/contact-us`"
          target="_blank"
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
  name: "ReactivateAccountPage",

  setup() {
    const urlShortenerWebProtocol = process.env.URL_SHORTENER_WEB_PROTOCOL;
    const urlShortenerWebDomain = process.env.URL_SHORTENER_WEB_DOMAIN;
    const urlShortenerWebPort = process.env.URL_SHORTENER_WEB_PORT;

    const urlShortenerWebLink = ref(
      `${urlShortenerWebProtocol}://${urlShortenerWebDomain}${
        urlShortenerWebPort ? `:${urlShortenerWebPort}` : ""
      }`
    );
    const emailAddress = ref(null);
    const accept = ref(false);

    return {
      urlShortenerWebLink,
      emailAddress,
      accept,

      onSubmit() {
        console.log(123);
      },

      onReset() {
        emailAddress.value = null;
        accept.value = false;
      },
    };
  },
});
</script>
