import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './routes/home';
import Checkout from './routes/checkout';
import Connect from './routes/connect';
import Marketplace from './routes/kyc';
import Header from './components/header';
import Layout from './components/layout';
import Kyc from './routes/kyc';
import Payout from './routes/payout';
import { NextUIProvider } from '@nextui-org/react';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/checkout',
    element: (
      <Layout>
        <Checkout />
      </Layout>
    ),
  },
  {
    path: '/connect',
    element: (
      <Layout>
        <Connect />
      </Layout>
    ),
  },
  {
    path: '/kyc',
    element: (
      <Layout>
        <Kyc />
      </Layout>
    ),
  },
  {
    path: '/payout',
    element: (
      <Layout>
        <Payout />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
