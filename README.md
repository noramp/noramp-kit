# NoRampKit

<a href="https://noramp.io">
<img alt="norampkit" src="https://imgur.com/JoTYgcJ.png" />
</a>

**The best way to accept credit card payments for your NFTs 🏎️**

NoRampKit is a [React](https://reactjs.org/) library that makes it easy to add a 1-click NFT checkout to your dapp.

- 🔥 Out-of-the-box Payment Button
- ✅ Easily customizable
- 🦄 Built on top of trusted partners like [stripe](https://stripe.com/connect) and [plaid](https://plaid.com)

## Documentation

For full documentation, visit [docs.noramp.io](https://docs.noramp.io).

## Tutorial

Follow alongside a tutorial, visit [medium.com/@NoRamp](https://medium.com/@NoRamp/introducing-norampkit-the-npm-package-for-nft-credit-card-checkout-c296cb3a486b).

# Quick start

## Install

```bash

npm i norampkit

```

or

```bash

yarn add norampkit

```

## Usage

Sign up on [app.noramp.io](https://app.noramp.io) in order to generate and create a PRICE_ID for your NFT sales.

```javascript
import { NoRampCheckout } from 'norampkit';

<NoRampCheckout priceId="PRICE_ID" testnet />;
```

## License

Licensed under the MIT License, Copyright © 2023-present [NoRamp](https://noramp.io).

See [LICENSE](./LICENSE) for more information.
