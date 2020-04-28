import React from 'react'
import {TextField,Button,makeStyles,Grid} from '@material-ui/core'
import {fire} from '../config/Fire'
const Form = ({handleAddItem}) => {
    const [item,setItem]=React.useState('')
    const addItem=(e)=>{
        e.preventDefault()
        handleAddItem(item)
        setItem('')
    }
    //material ui styles
    const styles=makeStyles((theme)=>({

        txt:{
            width:'98%',
            height:'45px',
            borderRadius:'5px',
            fontWeight:'bolder',
        },
        btn:{
            width:'100%',
            margintop:'100px',
            border:'0.5px solid',
            padding:'15px',
            fontWeight:'bolder',
            borderRadius:'5px',
            fontFamily: 'Merienda One',
            background:'none'
        }
    }))
    const classes=styles()
    return (
        <div>
            <Grid container spacing={2}>
                
                                <Grid item xs={9}>
                                
                                </Grid>
                                <Grid item xs={3}>
                                    <button style={{fontFamily: 'Merienda One',width:'100%',border:'0.5px solid', fontWeight:'bolder',borderRadius:'5px'}}
                                    onClick={()=>fire.auth().signOut()}><i className="fa fa-user" aria-hidden="true"style={{padding:'10px'}}></i>Logout</button>
                                </Grid>
                        
            </Grid>
            <form onSubmit={addItem}>
                <Grid container spacing={2}>
                    
                    <Grid item container xs={12} >
                        <Grid item xs={10}>
                            <input className={classes.txt}
                                id="outlined-basic"
                                value={item}
                                onChange={(e)=>setItem(e.target.value)}
                                variant="outlined"
                                placeholder="Add Quote" 
                                name='add' 
                                autoFocus />
                        </Grid>
                        <Grid item xs={2}>
                            <button className={classes.btn}name='add'>Add</button>
                        </Grid>
                    </Grid>
                    
                </Grid>
                
               
            </form>
        </div>
    )
}

export default Form
