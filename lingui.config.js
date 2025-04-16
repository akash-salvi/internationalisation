import { defineConfig } from "@lingui/cli";

export default defineConfig({
  locales: ["en", "fr", "pseudo"],
  pseudoLocale: "pseudo",
  sourceLocale: "en",

  catalogs: [
    {
      path: "src/locale/{locale}",
      include: ["src"],
    },
  ],

  catalogsMergePath: "src/locales/{locale}",
  compileNamespace: "es",
  fallbackLocales: {
    default: "en",
  },
});
