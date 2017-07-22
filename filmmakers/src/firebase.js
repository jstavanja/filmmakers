import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDrutHoz1dKvQ9taaIArBAn6IYkvRvqMIQ",
    authDomain: "filmmakers-a9a57.firebaseapp.com",
    databaseURL: "https://filmmakers-a9a57.firebaseio.com",
    projectId: "filmmakers-a9a57",
    storageBucket: "filmmakers-a9a57.appspot.com",
    messagingSenderId: "325600085634"
};
firebase.initializeApp(config);

let db = firebase.database();
let auth = firebase.auth();

export default {
    db,
    auth
};