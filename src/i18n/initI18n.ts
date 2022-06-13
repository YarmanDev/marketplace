import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";

function initI18n({
  resources,
  supportedLngs,
}: Pick<InitOptions, "resources" | "supportedLngs">) {
  i18n
    .use(initReactI18next) // passes i18next down to react-i18next
    .init({
      debug: false,
      resources: resources,
      detection: {
        lookupLocalStorage: "i18nextLng1",
        caches: ["localStorage"],
      },
      fallbackLng: "ua",
      supportedLngs: supportedLngs,

      keySeparator: false, // we do not use keys in form messages.welcome

      interpolation: {
        escapeValue: false, // react already safes from xss
        format: function (value, format) {
          if (format === "uppercase") {
            return value.toUpperCase();
          }
          if (format === "lowercase") {
            return value.toLowerCase();
          }
          return value;
        },
      },

      compatibilityJSON: "v3",
    });

  return i18n;
}

export { initI18n };
