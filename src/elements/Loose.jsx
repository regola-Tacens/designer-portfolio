import React from "react";
import { makeStyles, Grid } from "@material-ui/core/";
import Loose1 from "../images/Loose/Loose1.jpg";
import Loose2 from "../images/Loose/Loose2.jpg";
import Loose3 from "../images/Loose/Loose3.jpg";
import Loose4 from "../images/Loose/Loose4.jpg";
import Loose5 from "../images/Loose/Loose5.jpg";
import Loose6 from "../images/Loose/Loose6.jpg";

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

export default function Loose() {
  const classes = useStyles();
  return (
    <>
      <Grid container xs={12} className={classes.mainTech}>
        <Grid item xs={12} sm={12}>
          <img className={classes.pictures} src={Loose1} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1 className={classes.titleTech}>LOOSE TRUCKS & TIGHT LINES</h1>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.introText}>
          Concue en collaboration avec Victor Pellegrin aka "boodie", Loose trucks & tight Lines est une ligne devêtements
          dessinée par des skatebaorders pour des skateboarders qui partagent la même passion pour la pêche.
          Sur l'artiste de la collection aka Pentagram Pizza :" Je suis né à Newport Beach en 1971 près du HQ de Volcom,
          j’ai joué dans un groupe punk avec Wooly et j’ai fait des flyers sympa qui m’ont amené à devenir le premier employé
           du département artistique (en plus d’Ethan bien sûr, qui m’a gentiment embauché) où on me payait 6 dollars
            de l’heure à temps partiel, et ça s’est avéré être une longue et formidable expérience. 
            Alors ouais, j’espère que vous aimerez mes dessins !

        </Grid>
        <Grid item xs={12} sm={6}>
          <img className={classes.pictures} src={Loose2} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img className={classes.pictures} src={Loose3} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Loose4} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Loose5} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Loose6} alt="LooseImg" />
        </Grid>
      </Grid>
    </>
  );
}
