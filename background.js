var firebaseConfig = {
  apiKey: "AIzaSyB6JEV6DaSlSQGpVZkKnTn8yQUSIKq7QYo",
  authDomain: "planaway-7fc74.firebaseapp.com",
  databaseURL: "https://planaway-7fc74.firebaseio.com",
  projectId: "planaway-7fc74",
  storageBucket: "planaway-7fc74.appspot.com",
  messagingSenderId: "96594801878",
  appId: "1:96594801878:web:0be7e24ee0bcb7a3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

chrome.runtime.onMessage.addListener(
  function(message, callback){
    db.collection('FlightInformatioin').add({
      accessurl: message.accessurl,
      airPort: message.airPort,
      airline: message.airline,
      currentprice: message.currentprice,
      date: message.date,
      flightleg: message.flightleg,
      flightnumber: message.flightnumber,
      flighttime: message.flighttime,
      stopover: message.stopover
    });
    alert("data saved.");
});