import React from 'react'
import ListItem from './ListItem'

const List = ({items,remove}) => {
    return (
        <div>
            <div style={{display:'flex',margin:'5px 0px',justifyContent:'center',border:'1px solid',marginBottom:'10px'}}>
                {items.length?<h3 style={{color:'#219CB2',fontWeight:'bolder'}}>My Quotes</h3>:<h3>Your List is Empty</h3>}
            </div>
            
            {
                items.map((item,i)=><ListItem key={i}
                                              index={i}
                                              item={item}
                                              remove={remove}
                                    />)
            }
            
        </div>
    )
}

export default List
