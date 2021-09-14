import React from 'react'
import { makeStyles, Grid} from '@material-ui/core/'

import Girl1 from '../images/Girl/Girl1.jpg'
import Girl7 from '../images/Girl/Girl7.jpg'
import Girl3 from '../images/Girl/Girl3.jpg'
import Girl4 from '../images/Girl/Girl4.jpg'
import Girl5 from '../images/Girl/Girl5.jpg'
import Girl6 from '../images/Girl/Girl6.jpg'

const useStyles = makeStyles((theme)=>({
    
    mainTech :{
        flex: 1,
        // direction :'column',
        backgroundColor : '#FC4445',
        boxSizing : 'content-box',
        // height : '100vh'
    },
    titleTech :{
        display :'flex',
        padding : theme.spacing(10,10),
        // marginTop : '10vh',
        fontSize :'10vh',
        color :'#111',
    },
    introText :{
        display :'flex',
        // backgroundColor : '#0b0c10',
        padding : theme.spacing(10,10),
        textAlign : 'left',
        justifyContent : 'center',
        alignItems : 'center'
    },
    pictures : {
        boxSizing : 'content-box',
        objectFit : 'cover',
        width : '100%',
        height :'100%',

    },
    blocText :{
        display : 'flex',
        direction : 'row',

       
        padding : theme.spacing(6,6),
        backgroundColor : '#0b0c10',
        borderRadius : 0,
    }
    
}))

export default function Girl (){

    const classes = useStyles()
    return <>
    <Grid container xs={12} className={classes.mainTech} >
        <Grid item xs={12} sm={12}  >
            <img  className={classes.pictures} src={Girl1} alt='GirlImg'/> 
         </Grid>
        <Grid item xs={12} sm={6} >
            <h1 className={classes.titleTech}>GIRL x VOLCOM</h1>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.introText}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. 
        </Grid> 
        <Grid item xs={12} sm={4}  >
            <img  className={classes.pictures} src={Girl7} alt='LooseImg'/>    
        </Grid>
        <Grid item xs={12} sm={4}  >
            <img  className={classes.pictures} src={Girl3} alt='LooseImg'/>  
        </Grid>
        <Grid item xs={12} sm={4}  >
            <img  className={classes.pictures} src={Girl4} alt='LooseImg'/>  
        </Grid>
        <Grid item xs={12} sm={4}  >
            <img  className={classes.pictures} src={Girl5} alt='LooseImg'/>  
        </Grid>
        <Grid item xs={12} sm={4}  >
            <img  className={classes.pictures} src={Girl6} alt='LooseImg'/>  
        </Grid>

     </Grid>
    
    </>

}