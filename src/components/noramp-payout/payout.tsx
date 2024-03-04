import './styles.css';
import React from 'react';

import { NoRampPayoutProps } from '../../types';
import { getNoRampPayoutBaseUrl } from '../../utils/noramp-app';

export const NoRampPayout = ({
  token,
  testnet = false,
  theme = 'dark',
  height = '440',
  width = '100%',
}: NoRampPayoutProps) => {
  const baseUrl = getNoRampPayoutBaseUrl(testnet);

  let src = `${baseUrl}/${token}?theme=${theme}`;

  const isPreview = token === 'preview';

  if (isPreview) {
    src += '&preview=true';
  }

  return <iframe src={src} frameBorder="0" height={height} width={width} />;
};
