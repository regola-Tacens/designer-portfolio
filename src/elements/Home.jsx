import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { HeaderImage } from "./HeaderImage";
import { Bio, Recommandations } from "./Bio1";

const Toitle = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.titre}>JULIEN POLITI</h1>
      <p className={classes.sousTitre}>APPAREL DESIGN / CREATIVE DIRECTION</p>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  blocText: {
    padding: theme.spacing(6, 10),
    backgroundColor: "#FC4445",
    borderRadius: 0,
    shadows: "none",
  },

  blocText1: {
    padding: theme.spacing(6, 10),
    backgroundColor: "#0b0c10",
    borderRadius: 0,
    shadows: "none",
  },

  titre: {
    fontSize: 33,
    letterSpacing: 5,
  },

  sousTitre: {
    fontSize: 12,
    letterSpacing: 2,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <HeaderImage />
      </Grid>
      <Grid item xs={12} className="floatingId">
        <Toitle />
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs={12} sm={6} className={classes.blocText1}>
          <Bio />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.blocText}>
          <Recommandations />
        </Grid>
      </Grid>
    </>
  );
}
