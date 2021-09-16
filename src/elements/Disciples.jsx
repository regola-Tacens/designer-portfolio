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
