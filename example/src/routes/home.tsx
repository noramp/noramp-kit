import { Link } from 'react-router-dom';

export default function Home() {
  const handleSuccess = (data: any) => {
    console.log('Success: ', JSON.stringify(data, null, 2));
  };

  return (
    <div className="container mx-auto">
      <div className="p-6 xl:mx-28">
        <h1 className="mb-4 text-3xl font-bold">NoRampKit</h1>
        <a href="https://noramp.io" className="flex justify-center">
          <img
            alt="norampkit"
            src="../public/norampkit.png"
            height={518}
            width={922}
            className="mb-6 rounded-xl"
          />
        </a>

        <p className="mb-4">
          NoRampKit is a{' '}
          <a
            href="https://reactjs.org/"
            className="text-blue-500 hover:underline"
          >
            React
          </a>{' '}
          library that makes it easy to add a 1-click NFT checkout to your dapp.
        </p>

        <ul className="pl-6 mb-4 list-disc">
          <li>🔥 Out-of-the-box Payment Button</li>
          <li>✅ Easily customizable</li>
          <li>🦄 Built on top of trusted partners like stripe and plaid</li>
        </ul>

        <h2 className="mb-2 text-xl font-bold">Components</h2>
        <p className="flex gap-4 mb-4">
          <Link
            to="/checkout"
            className="font-bold text-blue-500 hover:underline"
          >
            Checkout Widget
          </Link>
          <br />
          <Link to="/kyc" className="font-bold text-blue-500 hover:underline">
            KYC Widget
          </Link>
          <br />
          <Link
            to="/payout"
            className="font-bold text-blue-500 hover:underline"
          >
            Payout Widget
          </Link>
        </p>

        <h2 className="mb-2 text-xl font-bold">Documentation</h2>
        <p className="mb-4">
          For full documentation, visit{' '}
          <a
            href="https://docs.noramp.io"
            className="text-blue-500 hover:underline"
          >
            docs.noramp.io
          </a>
          .
        </p>

        <h2 className="mb-2 text-xl font-bold">Tutorial</h2>
        <p className="mb-4">
          Follow alongside a tutorial, visit{' '}
          <a
            href="https://medium.com/@NoRamp/introducing-norampkit-the-npm-package-for-nft-credit-card-checkout-c296cb3a486b"
            className="text-blue-500 hover:underline"
          >
            medium.com/@NoRamp
          </a>
          .
        </p>

        <h2 className="mb-2 text-xl font-bold">Quick start</h2>
        <h3 className="mb-2 text-lg font-bold">Install</h3>
        <pre className="p-2 mb-4 text-white bg-gray-800 rounded">
          npm i norampkit
        </pre>
        <p className="mb-6">or</p>
        <pre className="p-2 mb-4 text-white bg-gray-800 rounded">
          yarn add norampkit
        </pre>
      </div>
    </div>
  );
}
