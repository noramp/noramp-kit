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
};
