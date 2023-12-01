import './styles.css';
import React from 'react';
import { useAccount } from 'wagmi';
import { NoRampConfig } from '../../types';
import '@rainbow-me/rainbowkit/styles.css';

import { ConnectButton } from '@rainbow-me/rainbowkit';

import { NoRampConnectProvider } from '../noramp-connect-provider/connect';

export const NoRampConnect = ({
  priceId = 'price_3O7ZpGp3BmILQOQhlzk2Pg',
  testnet = false,
  type = 'buy',
  buttonTheme = 'dark',
  ...config
}: NoRampConfig) => {
  return (
    <NoRampConnectProvider>
      <ConnectButton showBalance={false} />
    </NoRampConnectProvider>
  );
};
