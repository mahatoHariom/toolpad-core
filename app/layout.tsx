import * as React from 'react';
import { NextAppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import type { Navigation } from '@toolpad/core/AppProvider';
import './globals.css';
import { Settings } from '@mui/icons-material';
import { Chip } from '@mui/material';
const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',

  },
  {
    segment: 'dashboard',
    // title: 'Dashboard',
    icon: <DashboardIcon />,
    action: <Chip label={7} color="primary" size="small" />,
  },
  {
    segment: 'dashboard/profile',
    title: 'Profile',
    icon: <ShoppingCartIcon />, 
     pattern: 'dashboard/profile{/:id}*',
  },
   {
    segment: 'dashboard/setting',
    title: 'Setting',
    icon: <Settings />, 
  },
  {kind: 'divider'},
];

// it will take title homeUrl and logo will be changed later
const BRANDING = {
  title: 'Dashbooard',
  homeUrl:"/dashboard",
  logo:<img src='https://mui.com/static/logo.png' alt='logo' style={ { height: 40 } } />,

};

// const AUTHENTICATION = {};

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
              {props.children}
            </NextAppProvider>
          </AppRouterCacheProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
