import React, { FC, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { EnhancedStore } from "@reduxjs/toolkit";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createStore } from "../redux";
import "../styles/globals.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f83745",
    },
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/graphql",
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [store, setStore] = useState<EnhancedStore | null>(null);

  React.useEffect(() => {
    const store = createStore({ epicDependencies: { client } });
    setStore(store);
  }, []);

  if (!store) return <>{"Loading..."}</>;

  return (
    <>
      <Head>
        <title>{"Coolmovies Frontend"}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ReduxProvider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </ReduxProvider>
    </>
  );
};

export default App;
