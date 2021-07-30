import React, { useEffect } from 'react';
import { Avatar, withStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import { Switch, useLocation, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import ProjectAllocation from '../project-allocation';
import colors from '../../theme/colors';
import {
  fetchDepartments,
  fetchEmployees,
  fetchProjects,
  fetchShifts,
  logout,
} from '../../actions/user';
import Logo from '../../assets/logo.jpg';

const drawerWidth = 240;

const styles = (theme) => ({
  sideDrawerRoot: {},
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: colors.primary,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  text: {
    color: 'white',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: theme.spacing(20),
    marginTop: theme.spacing(3),
  },
  logo: {
    height: theme.spacing(16),
    width: theme.spacing(16),
  },
});

const SideMenus = [
  {
    name: 'Project Allocation',
    link: '/projects',
    icon: <HomeIcon fontSize="large" />,
  },
  {
    name: 'Logout',
    link: '/logout',
    icon: <LogoutIcon fontSize="large" />,
  },
];

const Home = (props) => {
  const classes = props.classes;

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchProjects());
    dispatch(fetchDepartments());
    dispatch(fetchShifts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    props.history.push('/');
    dispatch(logout());
  };

  const handleClick = (link) => {
    if (link === '/logout') {
      handleLogout();
      return;
    }
    if (location.pathname !== link) props.history.push(link);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
              root: classes.sideDrawerRoot,
            }}
            variant="permanent"
            open
          >
            <div className={classes.logoContainer}>
              <Avatar className={classes.logo} src={Logo} />
            </div>
            <List>
              {SideMenus.map((menu, index) => (
                <ListItem
                  button
                  key={menu.name}
                  onClick={() => handleClick(menu.link)}
                >
                  <ListItemIcon style={{ color: 'white' }}>
                    {menu.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={menu.name}
                    classes={{ root: classes.text }}
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Switch>
          <ProtectedRoute path="/" component={ProjectAllocation} />
          <ProtectedRoute path="/projects" component={ProjectAllocation} />
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(withStyles(styles)(Home));
