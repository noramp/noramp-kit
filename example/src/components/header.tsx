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
    {
      title: 'Connect',
      href: '/connect',
    },
  ];

  const location = useLocation();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="bg-[#121212] text-white border-b border-gray-200/20"
    >
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
          <Link className="text-gray-400 hover:text-gray-200" to="/checkout">
            Checkout
          </Link>
        </NavbarItem>
        <NavbarItem
          className="text-gray-400 hover:text-gray-200"
          isActive={location.pathname === '/kyc'}
        >
          <Link to="/kyc">KYC</Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === '/payout'}>
          <Link className="text-gray-400 hover:text-gray-200" to="/payout">
            Payout
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === '/connect'}>
          <Link className="text-gray-400 hover:text-gray-200" to="/connect">
            Connect
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
            variant="solid"
          >
            Get Stated
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu hidden={!isMenuOpen} className="bg-[#111111] text-slate-100">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="bg-transparent">
            <Link
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
