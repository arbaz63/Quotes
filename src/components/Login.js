import React from 'react'
import {fire,googleAuthProvider,facebookAuthProvider} from '../config/Fire'
import {Grid,Paper,makeStyles,Button} from '@material-ui/core'
export const Login = () => {
    const useStyles=makeStyles((theme)=>({
        root:{
          flexGrow:1
        },
        paper:{
          padding: theme.spacing(2),
          margin:'auto',
          marginTop:'100px',
          marginBottom:'10px',
          maxWidth:200,
          color:'red',
          border:'1.5px solid'
        }
    }))
    const classes=useStyles()
    //google login
    const openGoogleLoginPopup=()=>{
        return fire.auth().signInWithPopup(googleAuthProvider)
    }
    //facebook login
    const openFacebookLoginPopup=()=>{
        return fire.auth().signInWithPopup(facebookAuthProvider)
    }
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={1}>
                    <Grid item xs={12}style={{marginBottom:'10px',fontFamily: 'Comic Sans MS, Comic Sans, cursive',display:'flex',justifyContent:'center',fontWeight:'900',fontSize:'15px'}}>
                        Sign in to add Quotes
                    </Grid>
                    <Grid item xs={12}style={{display:'flex',justifyContent:'center'}}>
                        <Button onClick={openGoogleLoginPopup}
                        style={{fontFamily: 'Comic Sans MS, Comic Sans, cursive',background:'white',width:'100%',border:'0.5px solid',padding:'10px 10px',fontWeight:'900',fontSize:'10px'}}>
                                <i className="fab fa-google"style={{padding:'5px',color:'blue',fontSize:'15px'}}></i> 
                                 Sign in with Google
                        </Button>
                    </Grid>
                    <Grid item xs={12}style={{display:'flex',justifyContent:'center'}}>
                        <Button onClick={openFacebookLoginPopup}style={{fontFamily: 'Comic Sans MS, Comic Sans, cursive',color:'white',background:'blue',width:'100%',border:'0.5px solid',padding:'10px 10px',fontWeight:'900',fontSize:'10px'}}>
                                <i className="fab fa-facebook"style={{padding:'5px',color:'white',fontSize:'15px'}}></i> 
                                 Sign in with Facebook
                        </Button>
                    </Grid>
                </Grid>
               
            </Paper>
             
        </div>
    )
}
