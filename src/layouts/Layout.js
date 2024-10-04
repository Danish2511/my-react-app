// src/layout/Layout.js
import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Container, Box, Hidden, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Sidebar content (static for now, you can add dynamic items later)
  const drawer = (
    <List>
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  return (
    <>
      <CssBaseline />
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{ zIndex: theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            My App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${drawerWidth}px)`,
          [theme.breakpoints.down('sm')]: { width: '100%', marginLeft: 0 },
        }}
      >
        <Toolbar />
        <Container>
          {children}
        </Container>
      </Box>
    </>
  );
};

export default Layout;
