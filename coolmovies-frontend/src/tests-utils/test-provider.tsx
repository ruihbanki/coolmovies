import React, { useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { EnhancedStore } from "@reduxjs/toolkit";
import {
  ApolloClient,
  NormalizedCacheObject,
  useApolloClient,
} from "@apollo/client";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { createStore } from "../redux";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f83745",
    },
  },
});

interface TestProviderProps {
  children?: React.ReactNode;
  mocks?: MockedResponse<Record<string, any>>[];
}

const TestProvider = (props: TestProviderProps) => {
  const { children, mocks } = props;

  return (
    <MockedProvider mocks={mocks}>
      <TestProviderInner>{children}</TestProviderInner>
    </MockedProvider>
  );
};

const TestProviderInner = (props: TestProviderProps) => {
  const { children } = props;

  const client =
    useApolloClient() as unknown as ApolloClient<NormalizedCacheObject>;

  const [store, setStore] = useState<EnhancedStore | null>(null);

  React.useEffect(() => {
    const store = createStore({ epicDependencies: { client } });
    setStore(store);
  }, [client]);

  if (!store) return <>{"Loading..."}</>;

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default TestProvider;
