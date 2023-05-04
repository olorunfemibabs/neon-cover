import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, sepolia } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import Layout from "@/components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, sepolia],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        // http: `https://eth-sepolia.g.alchemy.com/v2/5ShvcS43c_Wrsfk_jTMZOU0sXXBKaVXP`,
        http: `https://eth-sepolia.g.alchemy.com/v2/K3WQD6pWbUy8xzRs3s8OVYppcMyoCWjE`,
        WebSocket: `wss://eth-sepolia.g.alchemy.com/v2/K3WQD6pWbUy8xzRs3s8OVYppcMyoCWjE`,
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  webSocketProvider,
  provider,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout provider={provider}>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
