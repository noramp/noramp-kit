import { useState } from 'react';
import { NoRampConnect } from '../../../src';
import ThemeSwitcher from '../components/ui/theme-switcher/theme-switcher';

const Connect = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <div className="container flex mx-auto my-0 ">
      <div className="flex flex-col items-center w-full ">
        <div className="flex items-center justify-between w-full max-w-4xl">
          <p className="my-4 text-2xl font-bold">Connect Widget</p>

          <div className="">
            <ThemeSwitcher onChange={handleThemeChange} />
          </div>
        </div>

        <div className="w-full max-w-4xl overflow-auto ">
          <NoRampConnect priceId="" />
        </div>

        <div className="flex flex-col justify-start w-full max-w-4xl mt-12">
          <h3 className="mb-2 text-lg font-bold">Usage</h3>
          <p className="mb-4">
            Connect using Web3 Wallets
            <a
              href="https://app.noramp.io"
              className="text-blue-500 hover:underline"
            ></a>{' '}
            to mint NFTs.
          </p>
          <pre className="p-2 mb-4 text-white bg-gray-800 rounded">
            {`import { NoRampConnect, NoRampConnectProvider } from 'norampkit';
<NoRampConnectProvider>
  <NoRampConnect />
</NoRampConnectProvider>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Connect;
