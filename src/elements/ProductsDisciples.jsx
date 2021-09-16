import React from "react";
import { makeStyles, Grid } from "@material-ui/core/";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Disciple1 from "../images/Disciples/DiscipleCard1.jpg";
import Disciple2 from "../images/Disciples/DiscipleCard2.jpg";
import Disciple3 from "../images/Disciples/DiscipleCard3.jpg";
import Disciple4 from "../images/Disciples/DiscipleCard4.jpg";
import Disciple5 from "../images/Disciples/DiscipleCard5.jpg";
import Disciple6 from "../images/Disciples/DiscipleCard6.jpg";
import Disciple7 from "../images/Disciples/DiscipleCard7.jpg";
import Disciple8 from "../images/Disciples/DiscipleCard8.jpg";
import Disciple9 from "../images/Disciples/DiscipleCard9.jpg";
import Disciple10 from "../images/Disciples/DiscipleCard10.jpg";
import Disciple11 from "../images/Disciples/DiscipleCard11.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 650,
    margin: 15,
    borderRadius: 0,
  },
  media: {
    height: 500,
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function ProductsDisciples() {
  const classes = useStyles();

  const DisciplesCard = [
    {
      imageName: Disciple1,
      cardTitle: "Outer Spaced pant",
      cardText:
        "Loose elastic waist pant with allover graphics by FuneralFrench",
    },
    {
      imageName: Disciple2,
      cardTitle: "Averted Visions jacket",
      cardText:
        "Black cord jacket with sublimated polyester lining, featuring the Art of Funeral French",
    },
    {
      imageName: Disciple3,
      cardTitle: "Outdhorror nylon vest",
      cardText:
        "Light padded nylon vest with contrast inner micro mesh lining.",
    },
    {
      imageName: Disciple4,
      cardTitle: "Spacegoolz tee-shirt",
      cardText:
        "Long sleeve tee shirt, back screenprint and sleeve screenprint,featuring the Art of Funeral French.",
    },
    {
      imageName: Disciple5,
      cardTitle: "Something out there hoodie",
      cardText:
        "Pullover hoodie with front outline embroidery and sleeve screenprints on both sleeves,featuring the Art of Funeral French.",
    },
    {
      imageName: Disciple6,
      cardTitle: "Extraneous LifeForms tee-shirt",
      cardText:
        "Garment dyed short-sleeve tee-shirt,featuring the Art of Funeral French.",
    },
    {
      imageName: Disciple7,
      cardTitle: "Black Sounds Sweatshirt",
      cardText:
        "Garment dyed crew neck fleece, chest embroidery featuring the Art of Funeral French .",
    },
    {
      imageName: Disciple8,
      cardTitle: "Remote chronicles long-sleeve",
      cardText:
        "Garment dyed long-sleeve tee-shirt, featuring the Art of Funeral French .",
    },
    {
      imageName: Disciple9,
      cardTitle: "Black Sounds Sweatshirt",
      cardText:
        "Garment dyed short-sleeve tee-shirt,featuring the Art of Funeral French.",
    },
    {
      imageName: Disciple10,
      cardTitle: "Extraneous LifeForms tee-shirt",
      cardText:
        "Garment dyed short-sleeve tee-shirt, featuring the Art of Funeral French.",
    },
    {
      imageName: Disciple11,
      cardTitle: "Extraneous LifeForms tee-shirt",
      cardText:
        "Garment dyed crew neck fleece, chest embroidery featuring the Art of Funeral French.",
    },
  ];

  return (
    <>
      <Grid container xs={12} className={classes.cardContainer}>
        {DisciplesCard.map((disciplecard) => (
          <Grid item>
            <DiscipleCarde
              disciplecard={disciplecard}
              key={disciplecard.cardTitle}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

const DiscipleCarde = function ({ disciplecard }) {
  // alert('ok')
  const classes = useStyles();
  console.log("cardTitle", JSON.stringify(disciplecard));
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={disciplecard.imageName} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {disciplecard.cardTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {disciplecard.cardText}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
