import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { authOnlyRoutes, publicAndAuthRoutes, publicOnlyRoutes } from '../utils/routes';
import { Context } from '../App';
import { observer } from 'mobx-react-lite';
import { Box, Divider, IconButton, List, ListItem, ListItemText, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  menuButton: {
    color: '#fff',
  },
  title: {
    // flexGrow: 1,
    textDecoration: 'none',
    color: '#fff',
    // marginRight: 'auto'
  },
  menuItems: {
    display: 'flex',
    justifyContent: 'space-between',
    // marginLeft: 50
  },
  list: {
    width: 250,
  }
});

const Navbar = observer(() => {
  const classes = useStyles();

  const { userStore } = useContext(Context);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {userStore.isAuth === false && publicOnlyRoutes.map(({ navbarDisplay, navbarName, path }) =>
          navbarDisplay &&
          <ListItem button component={Link}
                    to={path}>
            <ListItemText
              primary={navbarName}
            />
          </ListItem>
        )}
        {userStore.isAuth === false && <Divider/>}
        {publicAndAuthRoutes.map(({ navbarDisplay, navbarName, path }) =>
          navbarDisplay &&
          <ListItem button component={Link}
                    to={path}>
            <ListItemText
              primary={navbarName}
            />
          </ListItem>
        )}
        {userStore.isAuth === true && authOnlyRoutes.map(({ navbarDisplay, navbarName, path }) =>
          navbarDisplay &&
          <ListItem button component={Link}
                    to={path}>
            <ListItemText
              primary={navbarName}
            />
          </ListItem>
        )}
    
      </List>
    </div>
  );

  return (
    <AppBar position="sticky" elevation={0} style={{ background: '#2E3B55' }}>
      <Toolbar className={classes.menuItems}>
        <Typography variant="h6" className={classes.title} component={Link} to="/main">
          Gadget Go
        </Typography>
        <Box display={{ xs: 'block', md: 'none' }}>
          <IconButton onClick={toggleDrawer('right', true)}
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </Box>
        <Box display={{ xs: 'none', md: 'block' }}>
          {publicAndAuthRoutes.map(({ navbarDisplay, navbarName, path }) =>
            navbarDisplay &&
            <Button
              className={classes.menuButton}
              component={Link}
              to={path}>
              {navbarName}
            </Button>
          )}
          {userStore.isAuth === false && publicOnlyRoutes.map(({ navbarDisplay, navbarName, path }) =>
            navbarDisplay &&
            <Button
              className={classes.menuButton}
              component={Link}
              to={path}>
              {navbarName}
            </Button>
          )}
          {userStore.isAuth === true && authOnlyRoutes.map(({ navbarDisplay, navbarName, path }) =>
            navbarDisplay &&
            <Button
              className={classes.menuButton}
              component={Link}
              to={path}>
              {navbarName}
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default Navbar;