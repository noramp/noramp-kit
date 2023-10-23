import React from 'react';

import './styles.css';

import { getNoRampAppBaseUrl } from '../../utils/noramp-app';

type NoRampPayoutProps = {
  token: string;
  testnet?: boolean;
  theme?: 'light' | 'dark' | null;
  height?: string;
  width?: string;
};

export const NoRampPayout = ({
  token,
  testnet = false,
  theme = 'dark',
  height = '400',
  width = '100%',
}: NoRampPayoutProps) => {
  const baseUrl = getNoRampAppBaseUrl(testnet);

  let src = `${baseUrl}/embed/payout/${token}?theme=${theme}`;

  const isPreview = token === 'preview';

  if (isPreview) {
    src += '&preview=true';
  }

  return <iframe src={src} frameBorder="0" height={height} width={width} />;
};
