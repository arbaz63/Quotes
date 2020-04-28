import React,{useState,useEffect} from 'react'
import Form from './components/Form'
import List from './components/List'
import {fire,database,db} from './config/Fire'
import { Login } from './components/Login'
import './fa/css/all.css'
import './styles/style.css'
import image from './pics/profile.PNG'
//material ui
import {Grid,Button,Paper,makeStyles,Typography,TextField} from '@material-ui/core'
function App() {
  const [items,setItems]=useState([])
  const [allItems,setAllItems]=useState([])
  const [randomFromAll,setRandomFromAll]=useState('The two most important days in your life are the day you are born and the day you find out why.')
  const [randomName,setRandomName]=useState('Arbaz Sheraz')
  const [indexOfRandom,setIndexOfRandom]=useState(0)
  const [randomPic,setRandomPic]=useState(image)
  const [isAuthenticated,setIsAuthenticated]=useState(false)
  const [views,setViews]=useState(0)

  //getting items from firebase
  useEffect(()=>{
   if(fire.auth().currentUser)
   {
    const id=`users/${fire.auth().currentUser.uid}/items`
    database.collection(id).onSnapshot(snapshot=>{
      const array=[]
      snapshot.docs.forEach((doc)=>{
        array.push({id:doc.id, item:doc.data().item})
      })
      setItems(array)
    })
   }
         
    database.collection('allUsersData').onSnapshot(snapshot=>{
      const array=[]
      snapshot.docs.forEach((doc)=>{
        array.push({id:doc.id,
                    item:doc.data().item,
                    email:doc.data().email,
                    name:doc.data().name,
                    img:doc.data().img
                  })
      })
      setAllItems(array)  
    })
   
  },[isAuthenticated])
  //for views
  useEffect(()=>{
    db.ref('views').once('value')
    .then((snapshot)=>{
      const v=snapshot.val().Views
      setViews(v)
      db.ref('views').update({Views:v+1})
    })
  },[])
  //add
  const handleAddItem=(newItem)=>{
    items.push({item:newItem})
    setItems([...items])
    allItems.push({item:newItem})
    setAllItems([...allItems])
    //storing in firestore
    database.collection(`users/${fire.auth().currentUser.uid}/items`).add({item:newItem})
    //storing all items of all users
    database.collection('allUsersData').add({item:newItem,
                                            email:fire.auth().currentUser.email,
                                            name:fire.auth().currentUser.displayName,
                                            img:fire.auth().currentUser.photoURL
                                          })
  }
  //remove
  const remove=(index,fID)=>{
    //removing items from user's collection
    database.collection(`users/${fire.auth().currentUser.uid}/items`).doc(fID).delete()
    //matching index with all items
    const indexOfAllItems=allItems.findIndex((all) => all.item === items[index].item)
    //also removing from main collection
    database.collection('allUsersData').doc(allItems[indexOfAllItems].id).delete()
    //delete from all items
    allItems.splice(indexOfAllItems,1)
    setAllItems([...allItems])
    //delete from user's item
    items.splice(index,1)
    setItems([...items])
  }
   //random task
   const randomQuote=()=>{
    let index=Math.floor(Math.random()* allItems.length)
    if(allItems.length)
    {
      const opt=allItems[index].item
      const name=allItems[index].name
      const pic=allItems[index].img
      setRandomPic(pic)
      setIndexOfRandom(index)
      setRandomFromAll(opt)
      setRandomName(name)
    }
}

  //authentication
  fire.auth().onAuthStateChanged((user)=>{
    if(user)
    {
      setIsAuthenticated(true)
    }
    else{
      setIsAuthenticated(false)
    }
  })
  //material ui
  const useStyles=makeStyles((theme)=>({
    root:{
      flexGrow:1
    },
    paper:{
      padding: theme.spacing(2),
      margin:'auto',
      marginBottom:'10px',
      maxWidth:500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img:{
      margin:'auto',
      display:'block',
      maxWidth:'100%',
      maxHeight:'100%',
      borderRadius:'30%'
    },
    coloredPaper:{
      border:'1px solid',
      padding:'1vw',
      width:'100%',
      fontWeight:'900',
      color:'red',
      fontFamily: 'Merienda One'
    }
  }))
  const classes=useStyles()
  return (
    <div className='app wrap'>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2} >
            <Grid item container  spacing={2}>
              <Grid item xs={2}>
                <img src={randomPic&&randomPic} className={classes.img}/>
              </Grid>
              <Grid item xs={10}>  
                <Typography gutterBottom style={{fontFamily: 'Merienda One'}}>
                  {randomName}
                </Typography>
                <Typography gutterBottom variant="h6" style={{wordWrap:'break-word',fontFamily: 'Merienda One'}} >
                  <i className="fa fa-quote-left fa-xs "style={{color:'gray',padding:'10px'}} aria-hidden="true"></i> 
                    {randomFromAll}
                  <i className="fa fa-quote-right fa-xs "style={{color:'gray',padding:'10px'}} aria-hidden="true"></i>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container >
              <Grid item xs={12}>
                <Button className={classes.coloredPaper} onClick={randomQuote}>Next Quote</Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
      {
        isAuthenticated?
        <div className='content'>
          
          <Form handleAddItem={handleAddItem} />
          <List items={items} remove={remove}/>
        </div>:
               <Login />
      }
      
    </div>
  );
}

export default App;
