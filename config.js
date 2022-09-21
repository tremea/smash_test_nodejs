
const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyAxDyEXWNAIru-zFyS8SaaiFukW2HDs6sg",
    authDomain: "smash-test-832e1.firebaseapp.com",
    projectId: "smash-test-832e1",
    storageBucket: "smash-test-832e1.appspot.com",
    messagingSenderId: "244204611393",
    appId: "1:244204611393:web:871312ce959ba3584a63c0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
module.exports = db;