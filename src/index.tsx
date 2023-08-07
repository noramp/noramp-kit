import React, { useCallback } from 'react';
import NoRampButton from './components/NoRampButton/NoRampButton';
import useNoRampModal from './hooks/useNoRampModal';
import { NoRampConfig } from './types';

export const NoRampOneClick = ({
  priceId,
  testnet = false,
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

  return <NoRampButton onClick={handlePay} loading={isOpen} />;
};
