import React from 'react'
import {Divider, Typography} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    bio : {
        color :'#D6CBC7',
        fontSize :'1.2em',
        textAlign :'left',
        
        '& h1':{
            fontSize :'6vmin',
            color : '#FC4445'
        },
       
    },
    recommandations : {
        fontSize :'1.2em',
        textAlign :'left',
        color :'#fff',
        lineHeight :1.5,
        position : 'relative',
        '& p': {
            position : 'relative',
        },
        '& p:before' : {
        content :'open-quote',
        color :'#111',
        fontSize :70,
        fontFamily :'Fira Sans',
        verticalAlign: 'bottom',
        position : 'absolute',
        top : -30,
        left : -37
        },
        '& h1':{
            marginBottom : 50,
            fontSize :'6vmin',
            color :'#111'
        }, 
    },

    signature :{
        verticalAlign: 'bottom',
        
    },


})


export function Bio (){
    const classes = useStyles()
     return <div className={classes.bio}>
         <h1 className={classes.heroTitle}>Hello ! I am Julien.</h1>
         <p>
             I am a senior apparel designer with over 16 years of experience in the clothing industry.<br/><br/>

             Most of my career up to today has been spent designing for Surf/Skate clothing brands all of
            them based in California. I have been working for the Volcom Stone for the past 14 years, and before that i was
            doing things for Matix clothing, Lakai limited Footwear and DVS Shoes Co.
        <br/>
        <br/>
            All theses years working as a clothing designer, i have had the opportuniy to put into actions what i have learned about the whole process of designing and manufacturing clothes, from the first creative steps of designing a collection, like moodboards and general inspiration, to the actual finshed garment.

            <br/>I particularly enjoy team working, as i think that the mixing of ideas is really what keeps the creative momentum flowing.
            <br/><br/>I have always considered design to be more than just nice pieces of clothing. For me design starts with a story you tell yourself, and that you wish to share with the rest of the world.
         </p>
         <br/><br/>
         <h1>Skills</h1>
         <p>
             <ul>
                 <li>Cross-category designer experience in both Men and Boys apparel</li>              
                 <li>Extensive product development knowledge</li>
                 <li>Moodboard and Storytelling is the core of everything </li>
                 <li>Great experience of graphics applied to clothing ( placement prints, allovers)</li>
                 <li>Advanced Adobe user (Photoshop, Illustrator, InDesign)</li>
                 <li>Team player</li>
                 <li>Used to travel a lot for inspiration & visiting overseas vendors</li>
             </ul>
         </p>
         <br/><br/>
         <h1>Facts</h1>
         <ul>
            <li>I have been Directing and designing all of Volcom Europe capsule collections since 2015</li>
            <li>Global designer for Volcom Europe for over 14 years</li>
            <li>Graphic designer i the early stages of my design career</li>
         </ul>
         
     </div>
}

export function Recommandations (){
    const classes = useStyles()
    return <div className={classes.recommandations}> 
    <h1>People i worked with</h1>  
    <p>
    {/* <span className={classes.quoted}>" </span> */}
    Julien is an amazing design professional. His experience and skill set combined with his passion 
    and forward thinking makes him a valuable asset to any team or organization. 
    I have had the pleasure of working with Julien for the last 6 years and can attest 
    to all of the above. Julien has inherent foresight to see and translate trend with 
    the mix of progression and commercial sales in mind. He is a master storyteller and 
    can build theme based collections with a real “backbone” idea that 
    brings them to life through apparel.
    </p>
    <b className ={classes.signature}>Eric Williamson.</b>
    <span>
        <Divider></Divider>
        <i> Global Design Director at Volcom</i>
    </span>
    
    
    <br/><br/><br/>

    <p>
    {/* <span className={classes.quoted}>" </span> */}
    Julien is a an absolute visionary. A vastly experienced designer and creative mind, 
    Julien has been instrumental in setting the tone and ultimate success, across both progressive 
    brand collections and highly commercial product categories for Volcom for many years. I have had the 
    privilege of working with Julien for over 8 years and can attest to his high level of professionalism, 
    extensive skill set, global mindset and design execution. Julien is an extremely progressive thinker 
    with a unique ability to gauge global trends, whether progressive or commercial, and translate these 
    into commercialised successes. An absolute pleasure to work with, Julien would be a valuable asset to 
    any team or organisation.
    </p>
    <b className ={classes.signature}>Tim Van Reese.</b>
    <span>
        <Divider></Divider>
        <i>Product Director Japan/Apac at Volcom</i>
    </span>
    
 
    

    <br/><br/><br/>

    <p>
    {/* <span className={classes.quoted}>" </span> */}
    J'ai collaboré avec Julien pendant plus de 10 ans chez Volcom notamment sur nos 
    capsules skate, nos photoshoots et sur l'ensemble de notre programme Featured Artist.
    Ca a été un plaisir chaque saison de chercher, d'échanger, de construire et de mettre en 
    valeur des produits designés avec l'attention du détail. Julien a une grande ouverture d'esprit, 
    un esprit créatif que j'admire beaucoup et une vraie capacité d'écoute. Il a su se renouveler au fil 
    du temps pour suivre les tendances de notre marché.
    </p>
    <b className ={classes.signature}>Hélène Grolleau.</b>
    <span>
        <Divider></Divider>
        <i> Art Dept. Manager Europe at Volcom</i>
    </span>
    
    </div>
}