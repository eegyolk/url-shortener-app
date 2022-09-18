<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card class="verify-card row no-wrap justify-around items-center" flat>
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

        <q-card-section class="flex flex-center">
          <p class="text-weight-bold">
            Please wait while we verify your account.
          </p>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProcessingComponent",
});
</script>

<style lang="scss" scoped>
.verify-card {
  width: 452px;
  height: 400px;
  background-color: #fff;
  border: 1px solid $blue-2;
}
</style>
