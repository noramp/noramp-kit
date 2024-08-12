import React from 'react';
import NoRampLogo from '../NoRampLogo';
import { NoRampWandsProps } from '../../types';

export const NoRampUSDC = ({
  height = '440',
  width = '440',
}: NoRampWandsProps) => {
  let src = `https://usdc.noramp.io/swap`;

  const [openWidget, setOpenWidget] = React.useState(false);

  if (openWidget) {
    return (
      <div className="w-full h-full">
        <iframe
          src={src}
          title="NoRamp Cashout"
          width={width}
          height={height}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      className={`button`}
      type="button"
      onClick={() => setOpenWidget(true)}
      //   disabled={openWidget}
    >
      <span className="icon">
        <NoRampLogo />
      </span>
      {<span>Get USDC with NoRamp</span>}
    </button>
  );
};
