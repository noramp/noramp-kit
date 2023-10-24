import React from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon } from './moon.icon';
import { SunIcon } from './sun.icon';

type ThemeSwitcherProps = {
  onChange: (checked: boolean) => void;
};

export default function ThemeSwitcher({ onChange }: ThemeSwitcherProps) {
  return (
    <Switch
      defaultSelected
      onValueChange={(isSelected) => {
        onChange(isSelected);
      }}
      size="lg"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
    ></Switch>
  );
}
