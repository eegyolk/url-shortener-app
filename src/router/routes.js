const routes = [
  {
    path: "/sign-in",
    alias: "",
    component: () => import("layouts/NoLayout.vue"),
    children: [{ path: "", component: () => import("pages/SignInPage.vue") }],
  },

  {
    path: "/sign-up",
    alias: "",
    component: () => import("layouts/NoLayout.vue"),
    children: [{ path: "", component: () => import("pages/SignUpPage.vue") }],
  },

  {
    path: "/forgot-password",
    alias: "",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ForgotPasswordPage.vue") },
    ],
  },

  {
    path: "/reset-password",
    alias: "",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ResetPasswordPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
