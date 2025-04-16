import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { messages } from "./locales/en.mjs";

i18n.load("en", messages);
i18n.activate("en");

createRoot(document.getElementById("root")).render(
  <I18nProvider i18n={i18n}>
    <App />
  </I18nProvider>
);
