import React from 'react';
// import Grid from '@material-ui/core/grid';

import { makeStyles} from '@material-ui/core/styles';
import { Divider,Grid } from '@material-ui/core';

import { NavBar } from './elements/Navbar';

const useStyles = makeStyles((theme) =>({
  root : {
    flexGrow : 1,
  },

  // header : {
  //   padding : theme.spacing(0),
  //   textAlign :'left',
  //   color :'white',
  //   backgroundColor : 'black',
  //   borderRadius : 0,
  //   shadows: "none",
  // },

}));

export  default function App() {

  const classes = useStyles(); 

  return (
    <div className={classes.root }>
      
      <Grid container  direction ='column' spacing = {1}>
        <Grid item xs={12} container>
          <NavBar/>
        </Grid>
      </Grid> 

        
    </div>
  );
}




