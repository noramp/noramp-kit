import React, { useCallback } from 'react';
import NoRampButton from './components/NoRampButton/NoRampButton';
import useNoRampModal from './hooks/useNoRampModal';

export interface NoRampProps {
  appId: string;
  priceId: string;
  testnet?: boolean;
  auth?: boolean;
}

export const NoRampOneClick = ({
  appId,
  priceId,
  testnet = false,
  auth = false,
}: NoRampProps) => {
  const { open, isOpen } = useNoRampModal({
    appId,
    priceId,
    testnet,
    auth,
  });

  const handlePay = useCallback(() => {
    open();
  }, [open]);

  return <NoRampButton onClick={handlePay} loading={isOpen} />;
};
