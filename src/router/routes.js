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
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "sign-in",
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
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "sign-up",
        component: () => import("pages/AccountRegistry/SignUpPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: "/signing-completed",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "signing-completed",
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
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "verify-account",
        component: () => import("pages/AccountRegistry/VerifyAccountPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: "/verification-completed",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "verification-completed",
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
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "resend-verification",
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
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "resend-completed",
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
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "forgot-password",
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
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "recovery-emailed",
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
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "reset-password",
        component: () => import("pages/PasswordRecovery/ResetPasswordPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: "/password-updated",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "password-updated",
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
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
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
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "analytics",
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
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "links",
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
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "domain",
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
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "tags",
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
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "channels",
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
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "utm",
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
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "profile",
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
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "workspace",
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
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "settings",
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
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "billing",
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
