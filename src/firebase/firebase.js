import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDEQ-moSaPkw8kA3hjkn9f0ouP8E1uF0Vo",
    authDomain: "oste-parking.firebaseapp.com",
    databaseURL: "https://oste-parking.firebaseio.com",
    projectId: "oste-parking",
    storageBucket: "",
    messagingSenderId: "876385138793",
    appId: "1:876385138793:web:661f6b5198eea14b"
  };

firebase.initializeApp(config);

const database = firebase.database()

export {firebase, database as default}

// database.ref('spots/-LmjwVRzrGpJFPltvpGt').update({
//     owner: 'Maddin'
// })

const spots = []

    
database.ref('spots').once('value').then((snapshot) => {
    

    snapshot.forEach((child) => {

        spots.push({
            id: child.key,
            owner: child.val().owner,
            number: child.val().number,
            freeOn: Object.values(child.val().freeOn), 
            taken: Object.values(child.val().taken) 
        })

    })
    database.ref(`spots/${spots[1].id}/taken`).push({
        By: 'karl',
        On: 29
    })
})


console.log(spots);


// for(let i=1; i <= 4; i++){
//     database.ref('spots').push({
//         number: i,
//         owner: '',
//         freeOn: 0,
//         taken: 0
//     })
// }