import { makeStyles, Grid } from "@material-ui/core/";
import MailMe from "../api/MailMe";

const useStyles = makeStyles((theme) => ({
  mainTech: {
    flex: 1,

    backgroundColor: "#f1edec",
    boxSizing: "content-box",
    height: "100vh",
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

  blocText: {
    display: "flex",
    direction: "row",

    padding: theme.spacing(6, 6),
    backgroundColor: "#0b0c10",
    borderRadius: 0,
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Grid container xs={12} className={classes.mainTech}>
      <Grid item xs={12} className={classes.introText}>
        <MailMe />
      </Grid>
    </Grid>
  );
}
