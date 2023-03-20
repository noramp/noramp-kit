<a href="https://noramp.io">
  <img alt="norampkit" src="https://uploads-ssl.webflow.com/62fb60422902c4afa6e95ee3/63ab6bf7ce1c7de7f3e2e604_flow%205.png" />
</a>

# NoRampKit

**The best way to accept credit card payments for your NFTs 🛹**

NoRampKit is a [React](https://reactjs.org/) library that makes it easy to add a 1-click NFT checkout to your dapp.

- 🔥 Out-of-the-box Payment Button
- ✅ Easily customizable
- 🦄 Built on top of trusted partners like [stripe](https://stripe.com/connect)

## Documentation

For full documentation, visit [noramp.io](https://noramp.io).

# Quick start

```bash

yarn add @noramp/norampkit

```

```javascript
import { NoRampOneClick } from '@noramp/norampkit';

<NoRampOneClick priceId="PRICE_ID" appId="APP_ID" testnet auth />;
```

### Running examples

Go into an example directory, eg:

```bash
cd examples/
```

Install dependencies.

```bash
yarn
```

Then run the dev script.

```bash
yarn start
```

## Contributing

Please follow our [contributing guidelines](./.github/CONTRIBUTING.md).

## License

Licensed under the MIT License, Copyright © 2023-present [NoRamp](https://noramp.io).

See [LICENSE](./LICENSE) for more information.
