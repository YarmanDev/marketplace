import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theming/theme";
import createEmotionCache from "../src/createEmotionCache";
import { createGenerateClassName, StylesProvider } from "@mui/styles";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const generateClassName = createGenerateClassName({
  productionPrefix: "c",
});

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // React.useEffect(() => {
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles);
  // }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <StylesProvider generateClassName={generateClassName}>
          <CssBaseline />
          <Component {...pageProps} />
        </StylesProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
