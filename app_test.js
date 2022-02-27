
// Import the functions you need from the SDKs you need

const config = require("./config.json");
const admin = require('firebase-admin'); 
 
// https://firebase.google.com/docs/web/setup#available-libraries

 

admin.initializeApp({
  credential: admin.credential.cert(config.serviceAccount)
});


// Initialize Firebase

const db = admin.firestore(); 
const colActivities = db.collection('activity')
colActivities.add(
  {
    last_activity: new Date(),
    event_type: 'MESSAGE2',
    userId: 2898943,
    userName: 'userName'
  }
)



 
//const cityRef = db.collection('activity').doc('discord-activity');


