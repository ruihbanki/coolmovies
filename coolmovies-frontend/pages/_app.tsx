import React, { FC, useState } from "react";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import Head from "next/head";
import { EnhancedStore } from "@reduxjs/toolkit";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createStore } from "../redux";
import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [store, setStore] = useState<EnhancedStore | null>(null);
  React.useEffect(() => {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      uri: "/graphql",
    });

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
        <Component {...pageProps} />
      </ReduxProvider>
    </>
  );
};

export default App;
