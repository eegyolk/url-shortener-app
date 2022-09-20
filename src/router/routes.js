const routes = [
  {
    path: "/ ",
    alias: "",
    component: () => import("layouts/NoLayout.vue"),
    children: [{ path: "", component: () => import("pages/SignInPage.vue") }],
  },

  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("layouts/NoLayout.vue"),
    children: [{ path: "", component: () => import("pages/SignInPage.vue") }],
  },

  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("layouts/NoLayout.vue"),
    children: [{ path: "", component: () => import("pages/SignUpPage.vue") }],
  },

  {
    path: "/verify",
    name: "verify",
    component: () => import("layouts/NoLayout.vue"),
    children: [{ path: "", component: () => import("pages/VerifyPage.vue") }],
  },

  {
    path: "/resend-email",
    name: "resend-email",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/ResendVerificationEmailPage.vue"),
      },
    ],
  },

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
