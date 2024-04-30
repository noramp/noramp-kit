import React from 'react';

import './styles.css';

import { getNoRampAppBaseUrl } from '../../utils/noramp-app';
import { NoRampPayoutProps } from '../../types';

export const NoRampPayout = ({
  token,
  theme = 'dark',
  height = '400',
  width = '100%',
}: NoRampPayoutProps) => {
  const baseUrl = getNoRampAppBaseUrl();

  let src = `${baseUrl}/embed/payout/${token}?theme=${theme}`;

  const isPreview = token === 'preview';

  if (isPreview) {
    src += '&preview=true';
  }

  return <iframe src={src} frameBorder="0" height={height} width={width} />;
};
