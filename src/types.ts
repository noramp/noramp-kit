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
  testnet?: boolean;
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

export type NoRampCashoutProps = {
  testnet?: boolean;
  theme?: 'light' | 'dark' | null;
  height?: string;
  width?: string;
};

export type NoRampConnectProps = {
  testnet?: boolean;
  theme?: 'light' | 'dark' | null;
  height?: string;
  width?: string;
};

export type NoRampPayoutProps = {
  token: string;
  testnet?: boolean;
  theme?: 'light' | 'dark' | null;
  height?: string;
  width?: string;
};
