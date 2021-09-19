import React from "react";

import { Grid, makeStyles } from "@material-ui/core";
import Disciple1 from "../images/Disciples/Disciples1.jpg";
import Disciple2 from "../images/Disciples/Disciples2.jpg";
import Disciple3 from "../images/Disciples/Disciples3.jpg";
import ProductsDisciples from "./ProductsDisciples";

const useStyles = makeStyles((theme) => ({
  mainTech: {
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

export default function Disciples() {
  const classes = useStyles();
  return (
    <>
      <Grid container xs={12} className={classes.mainTech}>
        <Grid item xs={12} sm={12}>
          <img className={classes.pictures} src={Disciple1} alt="DiscipleImg" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1 className={classes.titleTech}>DISCIPLES OF THE STONE</h1>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.introText}>
        Richard Sayer, surnommé «French», est un artiste, illustrateur, métalleux et fan de skate. 
        Né à Aldershot en Angleterre, il vit actuellement dans la ville allemande de Nuremberg. 
        Dans le cadre de son partenariat avec VOLCOM, French présente des couleurs fluo éclatantes 
        et des encres fluorescentes qui caractérisent son style d'illustration particulier. 
        Invoquant l'imagerie de la fantaisie macabre, ses oeuvres rendent hommage à l'univers 
        du film d'horreur VHS, paru dans les années 1980. Zombies, visages dégoulinants,
         crânes et créatures macabres sont les figures phares de l'univers de French,
          créant un ensemble d'oeuvres qui met en valeur son interprétation unique de l'art de l'illustration.
           Il a notamment déjà collaboré avec BLOOD WIZARD SKATEBOARDS, BONES WHEELS, CREATURE SKATEBOARDS,
            HEROIN SKATEBOARDS, EMERICA et d'autres...
        </Grid>

        <Grid item xs={12} sm={6}>
          <img
            className={classes.pictures}
            src={Disciple2}
            alt="DiscipleImg2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            className={classes.pictures}
            src={Disciple3}
            alt="DiscipleImg3"
          />
        </Grid>
        <Grid item xs={12} sm={12} className={classes.blocText}>
          <ProductsDisciples />
        </Grid>
      </Grid>
    </>
  );
}
