import React from "react";
import { makeStyles, Grid } from "@material-ui/core/";

import Girl1 from "../images/Girl/Girl1.jpg";
import Girl7 from "../images/Girl/Girl7.jpg";
import Girl3 from "../images/Girl/Girl3.jpg";
import Girl4 from "../images/Girl/Girl4.jpg";
import Girl5 from "../images/Girl/Girl5.jpg";
import Girl6 from "../images/Girl/Girl6.jpg";

const useStyles = makeStyles((theme) => ({
  mainTech: {
    flex: 1,
    backgroundColor: "#FC4445",
    boxSizing: "content-box",
  },
  titleTech: {
    display: "flex",
    padding: theme.spacing(10, 10),

    fontSize: "10vh",
    color: "#111",
  },
  introText: {
    display: "flex",

    padding: theme.spacing(10, 10),
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center",
  },
  pictures: {
    boxSizing: "content-box",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  blocText: {
    display: "flex",
    direction: "row",

    padding: theme.spacing(6, 6),
    backgroundColor: "#0b0c10",
    borderRadius: 0,
  },
}));

export default function Girl() {
  const classes = useStyles();
  return (
    <>
      <Grid container xs={12} className={classes.mainTech}>
        <Grid item xs={12} sm={12}>
          <img className={classes.pictures} src={Girl1} alt="GirlImg" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1 className={classes.titleTech}>GIRL x VOLCOM</h1>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.introText}>
        Après presque 3 décennies de réussite commune, Girl Skateaboard et Volcom se sont unis pour créer
         une capsule célébrant leur skateur commun, Simon Bannerot. Avec l’aide des designers emblématiques
          de Girl et de Volcom, Simon a dessiné une collection complète qui convient à toutes les saisons
         avec l’esprit positif décrite par « Together There are more of us ».
      Cette collection, testée en tour, est fonctionnelle pour skater ou juste dans la vie de tous les jours.
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Girl7} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Girl3} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Girl4} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Girl5} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Girl6} alt="LooseImg" />
        </Grid>
      </Grid>
    </>
  );
}
