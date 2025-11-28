import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { PersonPinCircleOutlined } from '@mui/icons-material';
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
    segment: 'profile',
    title: 'Profile',
    icon: <ShoppingCartIcon />, 
    pattern: 'profile{/:id}*',
  },
  {
    segment: 'employees',
    title: 'Employees',
    icon: <PersonPinCircleOutlined />,
    pattern: 'employees{/:employeeId}*',
  },
  { kind: 'divider' },
];

export default NAVIGATION;
