import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './components/layout';
import './index.css';
import Cashout from './routes/cashout';
import Checkout from './routes/checkout';
import Connect from './routes/connect';
import Home from './routes/home';
import Payout from './routes/payout';

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
    path: '/cashout',
    element: (
      <Layout>
        <Cashout />
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
