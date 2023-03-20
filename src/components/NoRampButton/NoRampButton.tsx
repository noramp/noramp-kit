import './styles.css';
import React from 'react';
import NoRampLogo from '../NoRampLogo';
import LoadingIcon from '../LoadingIcon';

type NoRampButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const NoRampButton = ({ onClick, loading, disabled }: NoRampButtonProps) => {
  const renderIcon = () => {
    if (loading) {
      return <LoadingIcon />;
    }

    return <NoRampLogo />;
  };

  return (
    <button
      className="button"
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
    >
      <span className="icon">{renderIcon()}</span>
      <span className="">Buy with NoRamp</span>
    </button>
  );
};

export default NoRampButton;
