var config = {
  apiKey: "AIzaSyDoZHMf3Qks7HQSmx2veLG7xMyL9xmbdnI",
  authDomain: "ninja-firestore-tut-d2491.firebaseapp.com",
  databaseURL: "https://ninja-firestore-tut-d2491.firebaseio.com",
  projectId: "ninja-firestore-tut-d2491",
  storageBucket: "ninja-firestore-tut-d2491.appspot.com",
  messagingSenderId: "1086589875666"
};
firebase.initializeApp(config);
const db = firebase.firestore();

chrome.runtime.onMessage.addListener(
  function(message, callback){
    db.collection('cafes').add({
      name: message.name,
      city: message.city
    });
});