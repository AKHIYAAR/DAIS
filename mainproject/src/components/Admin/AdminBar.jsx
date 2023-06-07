import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import GroupIcon from '@mui/icons-material/Group';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout=()=>{
    window.localStorage.clear()
    window.location.href='/login'
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor:"rgba(0,0,0,.7)"}}>
        <Toolbar >
          <IconButton
            style={{color:"snow"}}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton >
          <Typography variant="h6" style={{color:"snow",marginLeft:"39%"}} noWrap component="div">
           <b> Readopia - D A I S  - Central</b>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}
        PaperProps={{
          sx:{
            backgroundColor:"rgba(0,0,0,.7)"
          }
        }}
      >
        <DrawerHeader>
          <IconButton  onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon style={{color:"snow"  }} /> :< ChevronLeftIcon style={{color:"snow"}} />}
          </IconButton>
        </DrawerHeader>
        <Divider style={{backgroundColor:"snow"  }}/>
        <List  style={{color:"snow"}}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <Link to={'/dashboard'} style={{color:'snow',  textDecoration:'none'}} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <DashboardIcon style={{color:"snow"}}/>           
                </ListItemIcon>
                <ListItemText style={{  textDecoration:'none'}} primary={"Dashboard"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}>
            <Link to={'/viewuser'} style={{color:'snow',  textDecoration:'none'}} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <GroupIcon style={{color:"snow"}}/>           
                </ListItemIcon>
                <ListItemText primary={"Users"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Link>
            </ListItem>
      
            <ListItem disablePadding sx={{ display: 'block' }}>
            <Link to={'/books'} style={{color:'snow',  textDecoration:'none'}} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <LibraryBooksIcon style={{color:"snow"}}/>           
                </ListItemIcon>
                <ListItemText primary={"Books"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
            <Link to={'/addbooks'} style={{color:'snow',  textDecoration:'none'}} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <BookmarkAddIcon style={{color:"snow"}}/>           
                </ListItemIcon>
                <ListItemText primary={" Add Book"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        <Divider style={{backgroundColor:"snow"}}/>
        <ListItem disablePadding sx={{ display: 'block' }}>
            <Link to={'/login'} style={{color:'snow',  textDecoration:'none'}} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <LoginIcon style={{color:"snow"}}/>           
                </ListItemIcon>
                <ListItemText primary={" Log Out"} sx={{ opacity: open ? 1 : 0 }} onClick={logout} />
              </ListItemButton>
              </Link>
            </ListItem>
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
      </Box>
    </Box>
  );
}
