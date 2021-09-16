import React from "react";

import { makeStyles, Grid } from "@material-ui/core/";
import Volcom1 from "../images/Volcom/Volcom1.jpg";
import Abandonned2 from "../images/Abandonned/Abandonned2.jpg";
import Abandonned3 from "../images/Abandonned/Abandonned3.jpg";
import Abandonned4 from "../images/Abandonned/Abandonned4.jpg";
import Abandonned5 from "../images/Abandonned/Abandonned5.jpg";
import Abandonned6 from "../images/Abandonned/Abandonned6.jpg";
import Abandonned7 from "../images/Abandonned/Abandonned7.jpg";
import Abandonned8 from "../images/Abandonned/Abandonned8.jpg";
import Abandonned9 from "../images/Abandonned/Abandonned9.jpg";

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

export default function Volcom() {
  const classes = useStyles();
  return (
    <>
      <Grid container xs={12} className={classes.mainTech}>
        <Grid item xs={12} sm={12}>
          <img className={classes.pictures} src={Volcom1} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1 className={classes.titleTech}>VOLCOM INDUSTRIES</h1>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.introText}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum.
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Abandonned2} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Abandonned3} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Abandonned4} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={8}>
          <img className={classes.pictures} src={Abandonned5} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Abandonned9} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Abandonned7} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Abandonned8} alt="LooseImg" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.pictures} src={Abandonned6} alt="LooseImg" />
        </Grid>
      </Grid>
    </>
  );
}
