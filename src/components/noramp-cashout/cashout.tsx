import React from 'react';
import NoRampLogo from '../NoRampLogo';
import { NoRampCashoutProps } from '../../types';

export const NoRampCashout = ({
  height = '440',
  width = '440',
}: NoRampCashoutProps) => {
  let src = `https://noramp-beam.vercel.app/`;
  //   let src = `http://localhost:3000`;

  const [openWidget, setOpenWidget] = React.useState(false);

  //   const isPreview = token === 'preview';

  //   if (isPreview) {
  //     src += '&preview=true';
  //   }

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
      {<span>Cashout with NoRamp</span>}
    </button>
  );
};
