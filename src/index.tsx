import React from 'react';
import './styles.css';

import { useCallback } from 'react';
import LoadingIcon from './components/LoadingIcon';
import NoRampLogo from './components/NoRampLogo';
import useNoRampModal from './hooks/useNoRampModal';
import { NoRampConfig } from './types';
import { TYPE_LABELS } from './constants';

export const NoRampOneClick = ({
  priceId,
  testnet = false,
  type = 'buy',
  buttonTheme = 'dark',
  ...config
}: NoRampConfig) => {
  const { open, isOpen } = useNoRampModal({
    priceId,
    testnet,
    ...config,
  });

  const handlePay = useCallback(() => {
    open();
  }, [open]);

  // return <NoRampButton onClick={handlePay} loading={isOpen} />;

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
      {/* <span className="">Buy with NoRamp</span> */}
    </button>
  );
};
