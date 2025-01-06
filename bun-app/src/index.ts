import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());
app.use("/", serveStatic({ path: "./static/index.html" }));

// check if the app is healthy
app.get("/health", (c) => {
  return c.text("OK");
});

// check if the app is ready to serve
app.get("/ready", (c) => {
  return c.text("OK");
});

app.get("*", (c) => {
  return c.redirect("/");
});

export default {
  port: 3000,
  fetch: app.fetch,
};
