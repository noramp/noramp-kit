import './styles.css';
import React from 'react';
import { NoRampConnectProps } from '../../types';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const NoRampConnect = ({
  theme = 'dark',
  ...config
}: NoRampConnectProps) => {
  return <ConnectButton showBalance={false} />;
};
