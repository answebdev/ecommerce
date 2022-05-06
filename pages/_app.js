import React from 'react';
import { Layout } from '../components';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

// Video: https://www.youtube.com/watch?v=4mOkFXyxfsU
// Code: https://github.com/adrianhajdin/ecommerce_sanity_stripe

// Start command: npm run dev (inside 'ecommerce' folder)

// Live site: https://ecommerce-six-self.vercel.app/
// Deployed Sanity Studio: https://ecommerce-ans.sanity.studio/desk

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
