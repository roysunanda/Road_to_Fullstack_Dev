import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./drizzle/schema.drizzle.js",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.SQL_URL,
  },
});
