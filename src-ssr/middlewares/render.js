import { ssrMiddleware } from "quasar/wrappers";

// This middleware should execute as last one
// since it captures everything and tries to
// render the page with Vue

export default ssrMiddleware(({ app, resolve, render, serve }) => {
  // Redirect to sign-in page
  app.get("/", (req, res) => {
    res.redirect("/sign-in");
  });

  // we capture any other Express route and hand it
  // over to Vue and Vue Router to render our page
  [
    "/sign-in",
    "/sign-up",
    "/forgot-password",
    "/reset-password",
    "/dashboard",
    "/analytics",
    "/links",
    "/domain",
    "/tags",
    "/channels",
    "/utm",
    "/workspace",
  ].forEach((url) => {
    app.get(url, (req, res) => {
      res.setHeader("Content-Type", "text/html");

      render(/* the ssrContext: */ { req, res })
        .then((html) => {
          res.send(html);
        })
        .catch((err) => {
          if (err.url) {
            if (err.code) {
              res.redirect(err.code, err.url);
            } else {
              res.redirect(err.url);
            }
          } else if (err.code === 404) {
            res.status(404).send("404 | Page Not Found");
          } else if (process.env.DEV) {
            serve.error({ err, req, res });
          } else {
            res.status(500).send("500 | Internal Server Error");
          }
        });
    });
  });

  // Redirect to sign-in page
  app.get("*", (req, res) => {
    res.redirect("/sign-in");
  });
});
