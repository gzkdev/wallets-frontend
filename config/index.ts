import { createConfig, http } from "wagmi";
import { baseSepolia, sepolia } from "wagmi/chains";

import { walletConnect, metaMask } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [baseSepolia, sepolia],
  connectors: [
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    }),
    metaMask(),
  ],
  transports: {
    [baseSepolia.id]: http(),
    [sepolia.id]: http(),
  },
});
