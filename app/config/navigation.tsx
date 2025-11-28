import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Settings } from '@mui/icons-material';
import { Chip } from '@mui/material';
import type { Navigation } from '@toolpad/core/AppProvider';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
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
  { kind: 'divider' },
];

export default NAVIGATION;
