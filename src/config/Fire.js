import * as firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyCJHFvLDenvo9L2Ax1f_s4IE79Gi3Ng8s0",
  authDomain: "todo-list-455f9.firebaseapp.com",
  databaseURL: "https://todo-list-455f9.firebaseio.com",
  projectId: "todo-list-455f9",
  storageBucket: "todo-list-455f9.appspot.com",
  messagingSenderId: "24320052799",
  appId: "1:24320052799:web:658c87522c612e9873728a"
};  // Initialize Firebase
const fire=firebase.initializeApp(firebaseConfig);
const database=firebase.firestore()
const db=firebase.database()
const googleAuthProvider=new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider=new firebase.auth.FacebookAuthProvider()
  export {fire,db,database,googleAuthProvider,facebookAuthProvider,firebase}




  // database.settings({timestampsInSnapshots:true})
  // const jugtain=[{jugat:'eda dada',catagory:'dada'},{jugat:'eda dada',catagory:'dada'}]
  // for(let i=0;i<jugtain.length;i++)
  // {
  //   database.ref('jugtain').push(jugtain[i])
  // }
  
  // database.ref('jugtain/-M55qr8CXXjPZxJN6u5s').update({
  //   jugat:'mar gya'
  // })
  // database.ref('jugtain/-M55qr8CXXjPZxJN6u5s').remove()
  // database.ref('jugtain').once('value')
  // .then((snapshot)=>{
  //   const jugtain1=[]
  //   snapshot.forEach((childsnapshot)=>{
  //     jugtain1.push({
  //       id:childsnapshot.key,
  //       ...childsnapshot.val()
  //     })
  //   })
  //   console.log(jugtain1)
  // })
  
  // export {firebase,googleProvider,database as default}
  // adding data----------------------------------------
  // database.ref().set({
  //     name:'arbaz',
  //     age:20,
  //     isSingle:true,
  //     job:'paf',
  //     location:{
  //         city:'Lahore',
  //         country:'Pakistan'
  //     }
  // }).then(()=>{
  //   console.log('Data is saved!')
  // }).catch((e)=>{
  //     console.log('This failed',e)
  // })
//   database.ref('age').set(21)
//   database.ref('location/city').set('kotli')
  // database.ref('attribures').set({length:20,height:30}).then(()=>{
  //     console.log('attribute successfully saved')
  // }).catch((e)=>{
  //     console.log('Attributes saving failed',e)
  // })

//   //  updating--------------------------------
//    database.ref().update({
//        name:'sheraz',
//        age:45,
//        job:'manager',
//        'location/city':'skt',
//        isSingle:null
//    })
//   // deleting---------------------------------
//   database.ref('isSingle').remove()
//   .then(()=>{
//       console.log('Data was deleted')
//   }).catch((e)=>{
//       console.log('Not deleted')
//   })
//   database.ref('isMingle').set(null)
//   // retrieving-------------------------------
// // for single time
// database.ref().once('value')
// .then((snapShot)=>{
//     const value=snapShot.val()
//     console.log(value)
// }).catch((e)=>{
//     console.log('error occured',e)
// })

// // for getting updates
// database.ref().on('value',(snapShot)=>{
//     const value=snapShot.val()
//     console.log(`${value.name} is ${value.job} having age ${value.age} and is living in ${value.location.city}`)
// })
// setTimeout(() => {
//     database.ref().update({
//         name:'arbaz',
//         age:21,
//         'location/city':'lahore'
//     })
// }, 3000);
// // i can also use database.ref().off to not see update notifications on console every single time

//   // working with arrays              adding
//   database.ref('notes').push({
//       title:'hello how r u ',
//       body:'i am fine'
//   })
// database.ref('notes/-M4YaQmk1EUHRHm1eLp-').update({
//     title:'hero',
// })
// database.ref('notes/-M4YaQmk1EUHRHm1eLp-').remove()
// // getting data from array-------------------------------
// database.ref('notes').once('value')
// .then((snapShot)=>{
//     const jobs=[]
//     snapShot.forEach((childSnapshot)=>{
//         jobs.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//   })
//   console.log(jobs)
