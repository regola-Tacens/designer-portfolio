import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./elements/Home";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { NavBar } from "./elements/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12} container>
          <NavBar />
          <Router>
            <Route>
              <Redirect from="*" to="/Home" />
            </Route>
          </Router>
        </Grid>
      </Grid>
    </div>
  );
}
