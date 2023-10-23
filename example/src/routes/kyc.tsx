import { useState } from 'react';
import { NoRampKyc } from '../../../src';
import ThemeSwitcher from '../components/ui/theme-switcher/theme-switcher';

const Kyc = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? 'light' : 'dark');
  };

  return (
    <div className="container flex mx-auto my-0 ">
      <div className="flex flex-col items-center w-full ">
        <div className="flex items-center justify-between w-full ">
          <p className="my-4 text-2xl font-bold">KYC Widget</p>

          <div className="">
            <ThemeSwitcher onChange={handleThemeChange} />
          </div>
        </div>

        <div className="w-full max-w-4xl overflow-auto ">
          <NoRampKyc token="preview" testnet theme={theme} />
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
            , create a Marketplace App and register sellers in order to get the
            token.
          </p>
          <pre className="p-2 mb-4 text-white bg-gray-800 rounded">
            {`import { NoRampKyc } from 'norampkit';

<NoRampKyc 
  token="TOKEN" 
  theme={"light" | "dark"} 
  testnet 
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Kyc;

// import { Switch } from '@nextui-org/react';
// import { NoRampKyc, NoRampOneClick } from '../../../src';
// import ThemeSwitcher from '../components/ui/theme-switcher/theme-switcher';
// import { useState } from 'react';

// const Kyc = () => {
//   const [theme, setTheme] = useState<'light' | 'dark'>('light');

//   const handleThemeChange = (checked: boolean) => {
//     setTheme(checked ? 'light' : 'dark');
//   };

//   return (
//     <div className="flex items-center justify-center m-auto mx-auto ">
//       <div className="flex flex-col items-center justify-center w-full ">
//         <div className="flex items-center justify-between w-full max-w-4xl">
//           <p className="my-4 text-2xl font-bold">KYC Widget</p>

//           <div className="">
//             <ThemeSwitcher onChange={handleThemeChange} />
//           </div>
//         </div>

//         <div className="w-full max-w-4xl overflow-auto ">
//           <NoRampKyc
//             token="preview"
//             testnet
//             theme={theme}
//             height="440"
//             width="100%"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Kyc;
