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

  {
    path: "/dashboard",
    alias: "",
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
    alias: "",
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
    alias: "",
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
    alias: "",
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
    alias: "",
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
    alias: "",
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
    alias: "",
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
    path: "/workspace",
    alias: "",
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
