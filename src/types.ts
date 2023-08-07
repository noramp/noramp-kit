export type NoRampConfig = {
  priceId: string;
  testnet?: boolean;
  onEvent?: (payload: any) => void;
  onSuccess?: (payload: any) => void;
  onFailure?: (payload: any) => void;
  onClose?: (payload: any) => void;
};
