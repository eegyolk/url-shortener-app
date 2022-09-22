import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { Cookies, LocalStorage } from "quasar";
import { storeToRefs } from "pinia";
import { useProfileStore } from "stores/profile-store";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  // Navigation guards for routes taht require authentication
  Router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth) {
      const lsKey = process.env.LOCAL_STORAGE_KEY_AUTHENTICATED;

      try {
        const profileStore = useProfileStore();
        const { isNotVerified, isDeactivated } = storeToRefs(profileStore);

        await profileStore.fetchMe();

        console.log(isNotVerified.value, isDeactivated.value);
        // TODO:: route to a page the tells the user that their account is not verified or deactivated.

        const value = LocalStorage.getItem(lsKey);

        if (!value) {
          LocalStorage.set(lsKey, true);
        }

        next();
      } catch (e) {
        Cookies.remove("XSRF-TOKEN");
        LocalStorage.remove(lsKey);
        next("/sign-in");
      }
    } else {
      next();
    }
  });

  // Navigation guards for routes that doesn't require authentication
  Router.afterEach((to) => {
    if (!to.meta.requiresAuth) {
      const lsKey = process.env.LOCAL_STORAGE_KEY_AUTHENTICATED;
      const value = LocalStorage.getItem(lsKey);

      if (value) {
        Router.replace("/dashboard");
      }
    }
  });

  return Router;
});
