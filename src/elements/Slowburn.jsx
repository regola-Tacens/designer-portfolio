import React from 'react'

import { makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    
    mainTech :{
        flex : 1,
        backgroundColor : '#FC4445',
        height : '100vh'
    },
    titleTech :{
        marginTop : '10vh',
        fontSize :'12vmin',
        color :'#111',
    }
}))

export default function Slowburn (){

    const classes = useStyles()
    return <div className={classes.mainTech}>
        <h1 className ={classes.titleTech}>SLOWBURN</h1>
        
    </div>

}