import React from "react";
import header1920 from "../images/Header_skate_1920.jpg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  HeaderImage: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
  },
}));

export function HeaderImage() {
  const classes = useStyles();
  return (
    <div>
      <img
        src={header1920}
        className={classes.HeaderImage}
        alt="headerimage"
      ></img>
    </div>
  );
}
