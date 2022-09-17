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
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ForgotPasswordPage.vue") },
    ],
  },

  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ResetPasswordPage.vue") },
    ],
  },

  {
    path: "/reactivate-account",
    name: "reactivate-account",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ReactivateAccountPage.vue") },
    ],
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/DashboardPage.vue"),
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
        component: () => import("pages/AnalyticsPage.vue"),
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
        component: () => import("pages/LinksPage.vue"),
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
        component: () => import("pages/DomainPage.vue"),
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
        component: () => import("pages/TagsPage.vue"),
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
        component: () => import("pages/ChannelsPage.vue"),
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
        component: () => import("pages/UTMPage.vue"),
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
        component: () => import("pages/ProfilePage.vue"),
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
        component: () => import("pages/WorkspacePage.vue"),
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
        component: () => import("pages/SettingsPage.vue"),
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
        component: () => import("pages/BillingPage.vue"),
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
