import React from 'react'
import {Button,Grid} from '@material-ui/core'

const ListItem = ({item,index,remove}) => {
    return (
        <div>
            <Grid container spacing={2} style={{border:'none',borderBottom:'0.5px solid'}}>
                <Grid item xs={10} style={{wordWrap:'break-word'}}>
                    <h4 style={{marginLeft:'15px'}}>{item.item}</h4>
                </Grid>
                <Grid item xs={1}>
                    <button className='xbtn'onClick={()=>remove(index,item.id)}>x</button>
                </Grid>
            </Grid>
            
            
            
        </div>
    )
}

export default ListItem
