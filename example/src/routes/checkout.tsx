// import { NoRampOneClick } from '../../../src';

// const Checkout = () => {
//   const handleSuccess = (data: any) => {
//     console.log('Success: ', JSON.stringify(data, null, 2));
//   };

//   return (
//     <div className="container">
//       <div className="column dark">
//         <p className="title">Light theme:</p>
//         <NoRampOneClick
//           priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
//           testnet
//           onSuccess={handleSuccess}
//           theme="light"
//           type="buy"
//           buttonTheme="light"
//         />

//         <NoRampOneClick
//           priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
//           testnet
//           onSuccess={handleSuccess}
//           theme="light"
//           type="book"
//           buttonTheme="light"
//         />

//         <NoRampOneClick
//           priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
//           testnet
//           onSuccess={handleSuccess}
//           theme="light"
//           type="donate"
//           buttonTheme="light"
//         />
//         <NoRampOneClick
//           priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
//           testnet
//           onSuccess={handleSuccess}
//           theme="light"
//           type="plain"
//           buttonTheme="light"
//         />
//       </div>

//       <div className="column light">
//         <p className="title">Dark theme:</p>
//         <NoRampOneClick
//           priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
//           testnet
//           onSuccess={handleSuccess}
//           theme="dark"
//           buttonTheme="dark"
//         />

//         <NoRampOneClick
//           priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
//           testnet
//           onSuccess={handleSuccess}
//           theme="dark"
//           buttonTheme="dark"
//           type="checkout"
//         />

//         <NoRampOneClick
//           priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
//           testnet
//           onSuccess={handleSuccess}
//           theme="dark"
//           buttonTheme="dark"
//           type="continue"
//         />

//         <NoRampOneClick
//           priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
//           testnet
//           onSuccess={handleSuccess}
//           theme="dark"
//           type="plain"
//           buttonTheme="dark"
//         />
//       </div>
//     </div>
//   );
// };

import { useState } from 'react';
import { NoRampOneClick, NoRampPayout } from '../../../src';
import ThemeSwitcher from '../components/ui/theme-switcher/theme-switcher';

const Checkout = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? 'light' : 'dark');
  };

  const handleSuccess = (data: any) => {
    console.log('Success: ', JSON.stringify(data, null, 2));
  };

  return (
    <div className="container flex mx-auto my-0 ">
      <div className="flex flex-col items-center w-full ">
        <div className="flex items-center justify-between w-full ">
          <p className="my-4 text-2xl font-bold">Checkout Widget</p>

          <div className="">
            <ThemeSwitcher onChange={handleThemeChange} />
          </div>
        </div>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 overflow-auto lg:grid-cols-2 ">
          <div className="flex">
            <NoRampOneClick
              priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
              testnet
              onSuccess={handleSuccess}
              theme={theme}
              type="buy"
              buttonTheme={theme}
            />
          </div>

          <div className="flex">
            <NoRampOneClick
              priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
              testnet
              onSuccess={handleSuccess}
              theme={theme}
              type="book"
              buttonTheme={theme}
            />
          </div>

          <div className="flex">
            <NoRampOneClick
              priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
              testnet
              onSuccess={handleSuccess}
              theme={theme}
              type="donate"
              buttonTheme={theme}
            />
          </div>
          <div className="flex">
            <NoRampOneClick
              priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
              testnet
              onSuccess={handleSuccess}
              theme={theme}
              type="plain"
              buttonTheme={theme}
            />
          </div>
        </div>

        <div className="flex flex-col justify-start w-full mt-12">
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
            {`import { NoRampOneClick } from 'norampkit';

<NoRampOneClick 
  priceId="PRICE_ID" 
  theme={"light" | "dark"} 
  testnet 
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
