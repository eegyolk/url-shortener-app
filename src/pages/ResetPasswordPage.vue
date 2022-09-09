<template>
  <q-page class="flex flex-center">
    <q-form @submit="onSubmit">
      <div class="flex flex-center q-pb-md" style="width: 380px">
        <p class="text-h5">Reset password</p>
      </div>

      <q-input
        outlined
        class="q-pb-md"
        :type="isPwd ? 'password' : 'text'"
        v-model="newPassword"
        placeholder="New Password"
        :no-error-icon="true"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="onShowPassword"
          />
        </template>
      </q-input>

      <q-input
        outlined
        class="q-pb-md"
        :type="password"
        v-model="confirmPassword"
        placeholder="Confirm Password"
        :no-error-icon="true"
      >
      </q-input>

      <div class="column q-gutter-md q-py-md">
        <q-btn
          label="Reset"
          size="lg"
          type="submit"
          color="primary"
          :no-caps="true"
        />
      </div>

      <div class="column q-pb-md">
        <span class="text-subtitle2">Password must contain:</span>
        <span>
          <q-icon name="noise_control_off" class="text-grey" size="2em" />
          At least one lower case letter
        </span>
        <span>
          <q-icon name="close" class="text-red" size="2em" /> At least one upper
          case letter
        </span>
        <span>
          <q-icon name="check" class="text-green" size="2em" /> At least one
          numeric
        </span>
        <span>
          <q-icon name="check" class="text-green" size="2em" /> At least one
          special character
        </span>
        <span>
          <q-icon name="check" class="text-green" size="2em" /> Minimum 8
          characters
        </span>
        <span>
          <q-icon name="check" class="text-green" size="2em" /> Maximum 20
          characters
        </span>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ResetPasswordPage",

  setup() {
    const newPassword = ref(null);
    const confirmPassword = ref(null);
    const isPwd = ref(true);
    const accept = ref(false);

    return {
      newPassword,
      confirmPassword,
      isPwd,
      accept,

      onSubmit() {
        console.log(123);
      },

      onReset() {
        newPassword.value = null;
        confirmPassword.value = null;
        isPwd.value = true;
        accept.value = false;
      },

      onShowPassword() {
        isPwd.value = !isPwd.value;
      },
    };
  },
});
</script>
