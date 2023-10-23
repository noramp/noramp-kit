export function getNoRampAppBaseUrl(testnet: boolean): string {
  const baseUrl = testnet
    ? 'https://testnet.noramp.io'
    : 'https://dashboard.noramp.io';

  return baseUrl;
}
