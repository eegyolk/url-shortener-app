<template>
  <q-page class="flex flex-center bg-blue-1">
    <InputFormComponent v-if="!success" @onSignUpSuccess="onSignUpSuccess" />
    <ThankYouComponent v-if="success" :emailAddress="emailAddress" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import InputFormComponent from "../components/SignUp/InputFormComponent.vue";
import ThankYouComponent from "../components/SignUp/ThankYouComponent.vue";

export default defineComponent({
  name: "SignUpPage",

  components: {
    InputFormComponent,
    ThankYouComponent,
  },

  setup() {
    const success = ref(false);
    const emailAddress = ref("");

    return {
      success,
      emailAddress,

      onSignUpSuccess(val) {
        success.value = val.success;
        emailAddress.value = val.emailAddress;
      },
    };
  },
});
</script>
