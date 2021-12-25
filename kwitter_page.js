//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCCFitkdFqbSr86tZqkXz-2tv6ySIuxiKw",
      authDomain: "kwitter-88c90.firebaseapp.com",
      databaseURL: "https://kwitter-88c90-default-rtdb.firebaseio.com",
      projectId: "kwitter-88c90",
      storageBucket: "kwitter-88c90.appspot.com",
      messagingSenderId: "468343755009",
      appId: "1:468343755009:web:3b3f2e620302b1f6184b00"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

 function send() {
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
   name:user_name,
   message:msg,
   like:0    
 });
 document.getElementById("msg").value="";
 }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
    }
