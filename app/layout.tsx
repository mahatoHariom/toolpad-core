import * as React from 'react';
import { NextAppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './globals.css';
import NAVIGATION from './config/navigation';
import BRANDING from './config/branding';
import Provider from './Provider';


export default async function RootLayout(props: { children: React.ReactNode }) {
  

  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body>
        {/* <SessionProvider session={session}> */}
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <NextAppProvider
              navigation={NAVIGATION}
              branding={BRANDING}
              // session={session}
              // authentication={AUTHENTICATION}
            >
              <Provider>{props.children}</Provider>
             
            </NextAppProvider>
          </AppRouterCacheProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
