import './styles.css';
import React from 'react';
import merge from 'lodash.merge';
import { useCallback } from 'react';
import LoadingIcon from '../LoadingIcon';
import NoRampLogo from '../NoRampLogo';
import { TYPE_LABELS } from '../../constants';
import useNoRampModal from '../../hooks/useNoRampModal';
import { NoRampConfig } from '../../types';
import '@rainbow-me/rainbowkit/styles.css';

import {
  ConnectButton,
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { NoRampConnectProvider } from '../noramp-connect-provider/connect';

export const NoRampConnect = ({
  priceId = 'price_3O7ZpGp3BmILQOQhlzk2Pg',
  testnet = false,
  type = 'buy',
  buttonTheme = 'dark',
  ...config
}: NoRampConfig) => {
  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora],
    [alchemyProvider({ apiKey: '' as string }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: 'NoRamp Connect',
    projectId: 'noramp-connect',
    chains,
  });

  const wagmiConfig = createConfig({
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
    <NoRampConnectProvider>
      <ConnectButton showBalance={false} />
    </NoRampConnectProvider>
  );
};
