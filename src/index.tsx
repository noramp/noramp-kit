import React, { useCallback } from 'react';
import NoRampButton from './components/NoRampButton/NoRampButton';
import useNoRampModal from './hooks/useNoRampModal';

export interface NoRampProps {
  priceId: string;
  testnet?: boolean;
  auth?: boolean;
}

export const NoRampOneClick = ({
  priceId,
  testnet = false,
  auth = false,
}: NoRampProps) => {
  const { open, isOpen } = useNoRampModal({
    priceId,
    testnet,
  });

  const handlePay = useCallback(() => {
    open();
  }, [open]);

  return <NoRampButton onClick={handlePay} loading={isOpen} />;
};
