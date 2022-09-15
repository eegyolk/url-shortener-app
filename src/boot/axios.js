import { boot } from "quasar/wrappers";
import axios from "axios";
import { Cookies } from "quasar";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const urlShortenerAPIProtocol = process.env.URL_SHORTENER_API_PROTOCOL;
const urlShortenerAPIDomain = process.env.URL_SHORTENER_API_DOMAIN;
const urlShortenerAPIPort = process.env.URL_SHORTENER_API_PORT;

const axiosRequestConfig = {
  baseURL: `${urlShortenerAPIProtocol}://${urlShortenerAPIDomain}${
    urlShortenerAPIPort ? `:${urlShortenerAPIPort}` : ""
  }`,
  headers: {
    "Access-Control-Allow-Origin": true,
    Accept: "application/json",
  },
  withCredentials: true,
};
const api = axios.create(axiosRequestConfig);
const temp = axios.create(axiosRequestConfig);

api.interceptors.request.use(async (config) => {
  const xsrfToken = Cookies.get("XSRF-TOKEN");
  if (!xsrfToken) {
    await temp.get("/app/csrf-cookie");
  }
  return config;
});

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { axios, api };
