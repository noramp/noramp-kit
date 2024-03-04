export function getNoRampAppBaseUrl(testnet: boolean): string {
  const baseUrl = testnet
    ? 'https://testnet.noramp.io'
    : 'https://dashboard.noramp.io';

  return baseUrl;
}

export function getNoRampPayoutBaseUrl(testnet: boolean): string {
  const baseUrl = testnet ? 'https://kyc.noramp.dev' : 'https://kyc.noramp.io';

  return baseUrl;
}
