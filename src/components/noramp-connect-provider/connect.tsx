import './styles.css';
import React from 'react';
import merge from 'lodash.merge';
import { useCallback } from 'react';
import LoadingIcon from '../LoadingIcon';
import NoRampLogo from '../NoRampLogo';
import { TYPE_LABELS } from '../../constants';
import useNoRampModal from '../../hooks/useNoRampModal';
import { NoRampConfig } from '../../types';
// import '@rainbow-me/rainbowkit/styles.css';

import {
  ConnectButton,
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, useAccount, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const NoRampConnectProvider = ({ children }: any): JSX.Element => {
  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: 'NoRamp Connect',
    projectId: 'noramp-connect',
    chains,
  });

  const config = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  const myTheme = merge(darkTheme(), {
    colors: {
      accentColor: '#47E9FF',
    },
  } as Theme);

  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
