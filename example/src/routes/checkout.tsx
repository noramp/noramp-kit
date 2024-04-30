import { useState } from 'react';
import { NoRampCheckout } from '../../../src';
import ThemeSwitcher from '../components/ui/theme-switcher/theme-switcher';

const Checkout = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  const handleSuccess = (data: any) => {
    console.log('Success: ', JSON.stringify(data, null, 2));
  };

  return (
    <div className="container flex mx-auto my-0 ">
      <div className="flex flex-col items-center w-full ">
        <div className="flex items-center justify-between w-full max-w-4xl ">
          <p className="my-4 text-2xl font-bold">Checkout Widget</p>

          <div className="">
            <ThemeSwitcher onChange={handleThemeChange} />
          </div>
        </div>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 overflow-auto lg:grid-cols-2 ">
          <div className="flex">
            <NoRampCheckout
              priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
              // priceId="price_1EJSx7ToLIsWmMQB6WLGmR"
              onSuccess={handleSuccess}
              theme={theme}
              type="buy"
              buttonTheme={theme}
              user="pepi@noramp.io"
            />
          </div>

          <div className="flex">
            <NoRampCheckout
              priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
              onSuccess={handleSuccess}
              theme={theme}
              type="book"
              buttonTheme={theme}
            />
          </div>

          <div className="flex">
            <NoRampCheckout
              priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
              onSuccess={handleSuccess}
              theme={theme}
              type="donate"
              buttonTheme={theme}
            />
          </div>

          <div className="flex">
            <NoRampCheckout
              priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
              onSuccess={handleSuccess}
              theme={theme}
              buttonTheme={theme}
              type="checkout"
            />
          </div>
          <div className="flex">
            <NoRampCheckout
              priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
              onSuccess={handleSuccess}
              theme={theme}
              buttonTheme={theme}
              type="continue"
            />
          </div>
          <div className="flex">
            <NoRampCheckout
              priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
              onSuccess={handleSuccess}
              theme={theme}
              type="plain"
              buttonTheme={theme}
            />
          </div>
        </div>

        <div id="output"></div>

        <div className="flex flex-col justify-start w-full max-w-4xl mt-12">
          <h3 className="mb-2 text-lg font-bold">Usage</h3>
          <p className="mb-4">
            Sign up on{' '}
            <a
              href="https://app.noramp.io"
              className="text-blue-500 hover:underline"
            >
              app.noramp.io
            </a>{' '}
            in order to generate and create a PRICE_ID for your NFT sales.
          </p>
          <pre className="p-2 mb-4 text-white bg-gray-800 rounded">
            {`import { NoRampCheckout } from 'norampkit';

<NoRampCheckout 
  priceId="PRICE_ID" 
  theme={"light" | "dark"} 
  user="gavin@hooli.xyz"
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
