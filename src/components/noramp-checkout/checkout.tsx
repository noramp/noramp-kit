import './styles.css';

import React from 'react';

import { useCallback } from 'react';
import LoadingIcon from '../LoadingIcon';
import NoRampLogo from '../NoRampLogo';
import { TYPE_LABELS } from '../../constants';
import useNoRampModal from '../../hooks/useNoRampModal';
import { NoRampConfig } from '../../types';

export const NoRampCheckout = ({
  priceId,
  type = 'buy',
  buttonTheme = 'dark',
  ...config
}: NoRampConfig) => {
  const { open, isOpen } = useNoRampModal({
    priceId,
    ...config,
  });

  const handlePay = useCallback(() => {
    open();
  }, [open]);

  const renderIcon = () => {
    if (isOpen) {
      return <LoadingIcon />;
    }

    return <NoRampLogo />;
  };

  const isPlain = type === 'plain';

  const label = TYPE_LABELS[type];

  return (
    <button
      className={`button button-${buttonTheme}`}
      type="button"
      onClick={handlePay}
      disabled={isOpen}
    >
      <span className="icon">{renderIcon()}</span>
      {!isPlain && <span>{label} with NoRamp</span>}
    </button>
  );
};
