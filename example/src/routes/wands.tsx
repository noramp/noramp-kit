import { useState } from 'react';
import { NoRampWands } from '../../../src';
import ThemeSwitcher from '../components/ui/theme-switcher/theme-switcher';

const Wands = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <div className="container flex mx-auto my-0 ">
      <div className="flex flex-col items-center w-full ">
        <div className="flex items-center justify-between w-full max-w-4xl">
          <p className="my-4 text-2xl font-bold">Wands Widget</p>

          <div className="">
            <ThemeSwitcher onChange={handleThemeChange} />
          </div>
        </div>

        <div className="w-full max-w-4xl overflow-auto ">
          <NoRampWands />
        </div>
      </div>
    </div>
  );
};

export default Wands;
