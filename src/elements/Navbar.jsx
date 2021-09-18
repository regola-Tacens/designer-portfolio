import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useScrollTrigger } from "@material-ui/core";
import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import MailIcon from "@material-ui/icons/Mail";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import WorkIcon from "@material-ui/icons/Work";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import KeyboardIcon from "@material-ui/icons/Keyboard";

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Techs from "./Techs";
import Home from "./Home";
import Disciples from "./Disciples";
import Loose from "./Loose";
import Future from "./Future";
import Macbalife from "./Macbalife";
import Girl from "./Girl";
import Abandonned from "./Abandonned";
import Volcom from "./Volcom";
import Slowburn from "./Slowburn";
import Constant from "./Constant";
import Contact from "./Contact";

const useStyles = makeStyles((theme) => ({
  bar: {
    background: "transparent",
    color: "white",
  },
  menuButton: {
    justifyContent: "space-between",
  },
  navIconHide: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuHide: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
  nested: {
    paddingLeft: theme.spacing(9),
  },
  menuIcon: {
    transition: "0.5s",
  },
}));

const ScrollToWhite = (props, { darkPage }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "white" : "transparent",
      color: trigger ? "black" : "#FC4445",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: trigger ? "none" : "none",
    },
  });
};

export function NavBar() {
  const [darkPage, setDarkPage] = useState(true);
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const works = [
    "Disciples of the Stone",
    "Loose Trucks & Tight Lines",
    "Future",
    "Macbalife",
    "Girl",
    "Abandonned Playgrounds",
    "Volcom Industries",
    "Slowburnnnn",
    "Constant Vacations",
  ];
  const [worksOpen, setWorksOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState((open) => !open);
  };

  const list = () => {
    console.log("classe", JSON.stringify(classes));
    const handleClick = () => {
      setWorksOpen(() => !worksOpen);
    };

    return (
      <div
        className={classes.list}
        role="presentation"
        // onClick={toggleDrawer()}
        onKeyDown={toggleDrawer()}
      >
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="WORKS " />
            {worksOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={worksOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {works.map((text) => (
                <ListItem button key={text} className={classes.nested}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Collapse>

          <Divider />
          <ListItem button key="TECH">
            <ListItemIcon>
              <KeyboardIcon />
            </ListItemIcon>
            <ListItemText primary="TECH" />
          </ListItem>
          <ListItem button key="RESUME/CV">
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="RESUME/CV" />
          </ListItem>
          <ListItem button key="BIO">
            <ListItemIcon>
              <FingerprintIcon />
            </ListItemIcon>
            <ListItemText primary="BIO" />
          </ListItem>
          <ListItem button key="CONTACT">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="CONTACT" />
          </ListItem>
        </List>
      </div>
    );
  };

  const SeasonalMenu = function ({ anchorEl, handleClose }) {
    return (
      <>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {works.map((work) => (
            <MenuItem
              component={RouterLink}
              to={work.split(" ")[0]}
              onClick={handleClose}
            >
              {work}
            </MenuItem>
          ))}
        </Menu>

        <Switch>
          <Redirect exact from="/" to="/Home" />
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Disciples">
            <Disciples />
          </Route>
          <Route path="/Loose">
            <Loose />
          </Route>
          <Route path="/Future">
            <Future />
          </Route>
          <Route path="/Macbalife">
            <Macbalife />
          </Route>
          <Route path="/Girl">
            <Girl />
          </Route>
          <Route path="/Abandonned">
            <Abandonned />
          </Route>
          <Route path="/Volcom">
            <Volcom />
          </Route>
          <Route path="/Slowburn">
            <Slowburn />
          </Route>
          <Route path="/Constant">
            <Constant />
          </Route>
        </Switch>
      </>
    );
  };

  const handleSeasonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    window.scrollTo(0, 0);
    setAnchorEl(null);
  };

  return (
    <>
      <Router>
        <ScrollToWhite darkPage={darkPage}>
          <AppBar position="fixed" className={classes.bar} elevation={0}>
            <Toolbar className={classes.menuButton}>
              <IconButton
                edge="start"
                className={classes.menuIcon}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer()}
              >
                <MenuIcon />
              </IconButton>
              <Button
                color="inherit"
                className={classes.navIconHide}
                onClick={handleSeasonClick}
              >
                <b>W O R K S</b>
              </Button>
              <Button
                color="inherit"
                className={classes.navIconHide}
                component={RouterLink}
                to="/Techs"
              >
                <b>T E C H S</b>
              </Button>
              <Button color="inherit" className={classes.navIconHide}>
                <b>R E S U M E / CV</b>
              </Button>
              <Button
                color="inherit"
                className={classes.navIconHide}
                component={RouterLink}
                to="/Home"
              >
                <b>H O M E</b>
              </Button>
              <Button
                color="inherit"
                className={classes.navIconHide}
                component={RouterLink}
                to="/Contact"
              >
                <b>C O N T A C T</b>
              </Button>
              {/* <Button color ="inherit"  className={classes.navIconHide}>Sign in</Button> */}
            </Toolbar>
          </AppBar>
        </ScrollToWhite>
        <Switch>
          <Route path="/Techs">
            <Techs />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
        <SeasonalMenu anchorEl={anchorEl} handleClose={handleClose} />
        <Drawer anchor="right" open={state} onClose={toggleDrawer()}>
          {list()}
        </Drawer>
      </Router>
    </>
  );
}
