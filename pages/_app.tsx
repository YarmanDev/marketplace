import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { default as lightTheme } from "../src/theming/lightTheme";
import { default as darkTheme } from "../src/theming/darkTheme";
import createEmotionCache from "../src/createEmotionCache";
import { createGenerateClassName, StylesProvider } from "@mui/styles";
import i18next from "i18next";
import { en, initI18n, SupportedLanguage, ua } from "../src/i18n";
import { I18nextProvider } from "react-i18next";
import { useEffect, useState } from "react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const generateClassName = createGenerateClassName({
  productionPrefix: "c",
});

const resources: Record<SupportedLanguage, any> = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
} as const;

const supportedLngs = Object.keys(resources);

const i18nInstance = initI18n({
  supportedLngs,
  resources,
});

function getActiveTheme(themeMode: "light" | "dark") {
  return themeMode === "light" ? lightTheme : darkTheme;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // React.useEffect(() => {
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles);
  // }, []);

  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">("light");

  const toggleTheme: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";

    setSelectedTheme(desiredTheme);
  };

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme));
  }, [selectedTheme]);

  return (
    <I18nextProvider i18n={i18nInstance}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={activeTheme}>
            <StylesProvider generateClassName={generateClassName}>
              <CssBaseline />
              <Component {...pageProps} toggleTheme={toggleTheme} />
            </StylesProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </CacheProvider>
    </I18nextProvider>
  );
}
