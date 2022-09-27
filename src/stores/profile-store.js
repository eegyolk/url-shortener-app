import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import { api } from "boot/axios";

export const useProfileStore = defineStore("profileStore", () => {
  const id = ref(0);
  const fullName = ref("");
  const emailAddress = ref("");
  const ssoProvider = ref("");
  const imageUrl = ref("");
  const country = ref("");
  const verifiedAt = ref("");
  const loggedInAt = ref("");
  const resetAt = ref("");
  const primaryWorkspaceId = ref(0);
  const error = reactive({
    code: 0,
    message: "",
  });

  const isNotVerified = computed(() =>
    error.code === "ERR-ME-02" ? true : false
  );

  const isDeactivated = computed(() =>
    error.code === "ERR-ME-03" ? true : false
  );

  const fetchMe = async () => {
    try {
      const response = await api.get("/app/me");

      const { status, errorCode, message, data } = response.data;

      if (status === 1) {
        id.value = data.id;
        fullName.value = data.full_name;
        emailAddress.value = data.email_address;
        ssoProvider.value = data.sso_provider;
        imageUrl.value = data.image_url;
        country.value = data.country;
        verifiedAt.value = data.verified_at;
        loggedInAt.value = data.logged_in_at;
        resetAt.value = data.reset_at;
        primaryWorkspaceId.value = data.primary_workspace_id;
        error.code = 0;
        error.message = "";
      } else {
        error.code = errorCode;
        error.message = message;
      }
    } catch (err) {
      throw err;
    }
  };

  return {
    id,
    fullName,
    emailAddress,
    ssoProvider,
    imageUrl,
    country,
    verifiedAt,
    loggedInAt,
    resetAt,
    primaryWorkspaceId,
    error,
    isNotVerified,
    isDeactivated,
    fetchMe,
  };
});
