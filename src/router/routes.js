const routes = [
  // Authentication - Begin
  {
    path: "/ ",
    alias: "",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Authentication/SignInPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Authentication/SignInPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  // Authentication - End

  // Account Registry - Begin
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/AccountRegistry/SignUpPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: "/signing-completed",
    name: "signing-completed",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("pages/AccountRegistry/SigningCompletedPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: "/verify-account",
    name: "verify-account",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/AccountRegistry/VerifyAccountPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: "/verification-completed",
    name: "verification-completed",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("pages/AccountRegistry/VerificationCompletedPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: "/resend-verification",
    name: "resend-verification",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("pages/AccountRegistry/ResendVerificationPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: "/resend-completed",
    name: "resend-completed",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("pages/AccountRegistry/ResendCompletedPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  // Account Registry - End

  // Password Recovery - Begin
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("pages/PasswordRecovery/ForgotPasswordPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: "/recovery-emailed",
    name: "recovery-emailed",
    props: true,
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("pages/PasswordRecovery/RecoveryEmailedPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/PasswordRecovery/ResetPasswordPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: "/password-updated",
    name: "password-updated",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("pages/PasswordRecovery/PasswordUpdatedPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  // Password Recovery - End

  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/DashboardPage.vue"),
        meta: {
          requiresAuth: true,
          title: "Dashboard",
        },
      },
    ],
  },

  {
    path: "/analytics",
    name: "analytics",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/AnalyticsPage.vue"),
        meta: {
          requiresAuth: true,
          title: "Analytics",
        },
      },
    ],
  },

  {
    path: "/links",
    name: "links",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/LinksPage.vue"),
        meta: {
          requiresAuth: true,
          title: "Links",
        },
      },
    ],
  },

  {
    path: "/domain",
    name: "domain",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/DomainPage.vue"),
        meta: {
          requiresAuth: true,
          title: "Domain",
        },
      },
    ],
  },

  {
    path: "/tags",
    name: "tags",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/TagsPage.vue"),
        meta: {
          requiresAuth: true,
          title: "Tags",
        },
      },
    ],
  },

  {
    path: "/channels",
    name: "channels",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/ChannelsPage.vue"),
        meta: {
          requiresAuth: true,
          title: "Channels",
        },
      },
    ],
  },

  {
    path: "/utm",
    name: "utm",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/UTMPage.vue"),
        meta: {
          requiresAuth: true,
          title: "UTM",
        },
      },
    ],
  },

  {
    path: "/profile",
    name: "profile",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/ProfilePage.vue"),
        meta: {
          requiresAuth: true,
          title: "Profile",
        },
      },
    ],
  },

  {
    path: "/workspace",
    name: "workspace",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/WorkspacePage.vue"),
        meta: {
          requiresAuth: true,
          title: "Workspace",
        },
      },
    ],
  },

  {
    path: "/settings",
    name: "settings",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/SettingsPage.vue"),
        meta: {
          requiresAuth: true,
          title: "Settings",
        },
      },
    ],
  },

  {
    path: "/billing",
    name: "billing",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/BillingPage.vue"),
        meta: {
          requiresAuth: true,
          title: "Billing",
        },
      },
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
