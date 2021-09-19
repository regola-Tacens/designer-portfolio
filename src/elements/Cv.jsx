import { makeStyles, Grid } from "@material-ui/core/";
import { Link } from 'react-router-dom';
import CV from '../images/cv/julienOclock.jpg'

const useStyles = makeStyles((theme) => ({
  mainTech: {
    flex: 1,
    backgroundColor: "#f1edec",
    boxSizing: "content-box",
  },
  titleTech: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(1, 5),
    fontSize: "1rem",
    color: "#000",
    textDecoration:"none"
  },
  pictures: {
    boxSizing: "content-box",
    objectFit: "contain",
    width: "90%",
    height: "90%",
  },
  introText: {
    display: "flex",
    flexDirection:"column",
    padding: theme.spacing(10, 10),
    textAlign: "left",
    // justifyContent: "center",
    alignItems:" center",
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Grid container xs={12} className={classes.mainTech}>
      <Grid item xs={12} className={classes.introText}>
        <Link className={classes.titleTech} to="/cv/julienOclock.pdf" target="_blank" download>Click to download</Link>
        <Link className={classes.titleTech} to="/cv/julienOclock.pdf" target="_blank" download>
        <img className={classes.pictures} src={CV} alt="JulienPolitiCV" />
        </Link>
      </Grid>
    </Grid>
  );
}
