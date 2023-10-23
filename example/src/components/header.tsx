import { Link, useLocation } from 'react-router-dom';
import Logo from './ui/logo';

import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as NextUILink,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      title: 'Checkout',
      href: '/checkout',
    },
    {
      title: 'KYC',
      href: '/kyc',
    },
    {
      title: 'Payout',
      href: '/payout',
    },
  ];

  const location = useLocation();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link color="foreground" to="/" className="flex">
            <Logo />
            <p className="ml-2 font-bold text-inherit">NoRamp Kit</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-10 sm:flex" justify="center">
        <NavbarItem isActive={location.pathname === '/checkout'}>
          <Link color="foreground" to="/checkout">
            Checkout
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === '/kyc'}>
          <Link to="/kyc">KYC</Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === '/payout'}>
          <Link color="foreground" to="/payout">
            Payout
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={NextUILink}
            color="primary"
            target="_blank"
            href="https://dashboard.noramp.io/?utm_source=norampkit"
            variant="flat"
          >
            Get Stated
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu hidden={!isMenuOpen}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className="w-full"
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
