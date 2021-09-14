import React, { useRef } from 'react'
import header1920 from '../images/Header_skate_1920.jpg'; 
// import header1280 from '../images/Header_skate_1280.jpg';
// import header960 from '../images/Header_skate_960.jpg'; 
// import header600 from '../images/Header_skate_600.jpg'; 
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    
        HeaderImage :{
        objectFit : 'contain',
        width : '100%',
        height :'100%',   
      },
}))


export function HeaderImage(){

    const classes = useStyles()
    return <div >
    {/* <img className={HeaderImage} src={header1920} alt='headerimage'></img> */}
    <img  src={header1920}  className={classes.HeaderImage} alt='headerimage'></img>
   
    </div>
}



// const Title = ()=>{

//     return <div className='floatingId'> 
//       <h1 id='Titre'>JULIEN POLITI</h1>
//       <p id='sousTitre'>
//           APPAREL DESIGN / CREATIVE DIRECTION
//       </p>
    
//     </div>
// }

