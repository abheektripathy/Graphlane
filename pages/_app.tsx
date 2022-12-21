// @ts-nocheck

import { AppProps } from "next/app";

import "../styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

import { MantineProvider } from "@mantine/core";
import { ApplicationContainer } from "../components/ApplicationContainer";

const supportedChainIds = [1, 4];
const connectors = {
  injected: {},
};

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{ colorScheme: "dark" }}
    >
      <ApplicationContainer>
        <ThirdwebWeb3Provider connectors={connectors} supportedChainIds={[]}>
          <Component {...pageProps} />
        </ThirdwebWeb3Provider>
      </ApplicationContainer>
    </MantineProvider>
  );
}
