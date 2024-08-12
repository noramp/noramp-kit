export type ButtonType =
  | 'buy'
  | 'donate'
  | 'plain'
  | 'book'
  | 'checkout'
  | 'subscribe'
  | 'add-money'
  | 'contribute'
  | 'order'
  | 'reload'
  | 'rent'
  | 'support'
  | 'tip'
  | 'top-up'
  | 'continue';

export type NoRampConfig = {
  priceId: string;
  theme?: 'light' | 'dark' | null;
  buttonTheme?: 'light' | 'dark' | null;
  type?: ButtonType;
  onEvent?: (payload: any) => void;
  onSuccess?: (payload: any) => void;
  onFailure?: (payload: any) => void;
  onClose?: (payload: any) => void;
  user?: string;
  userCanEditWalletAddress?: string;
};

export type NoRampWandsProps = {
  theme?: 'light' | 'dark' | null;
  height?: string;
  width?: string;
};

export type NoRampKycProps = {
  token: string;
  theme?: 'light' | 'dark' | null;
  height?: string;
  width?: string;
};

export type NoRampCashoutProps = {
  theme?: 'light' | 'dark' | null;
  height?: string;
  width?: string;
};

export type NoRampConnectProps = {
  theme?: 'light' | 'dark' | null;
  height?: string;
  width?: string;
};

export type NoRampPayoutProps = {
  token: string;
  theme?: 'light' | 'dark' | null;
  height?: string;
  width?: string;
};
