import './styles.css';

import React from 'react';
import { getNoRampAppBaseUrl } from '../../utils/noramp-app';

type NoRampKycProps = {
  token: string;
  testnet?: boolean;
  theme?: 'light' | 'dark' | null;
  height?: string;
  width?: string;
};

export const NoRampKyc = ({
  token,
  testnet = false,
  theme = 'dark',
  height = '440',
  width = '100%',
}: NoRampKycProps) => {
  const baseUrl = getNoRampAppBaseUrl(testnet);

  let src = `${baseUrl}/embed/kyc/${token}?theme=${theme}`;

  const isPreview = token === 'preview';

  if (isPreview) {
    src += '&preview=true';
  }

  return <iframe src={src} frameBorder="0" height={height} width={width} />;
};
