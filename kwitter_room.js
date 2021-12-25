
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
 document.getElementById("user").innerHTML = "welcome " + user_name + "!";

 function add_room() {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
   });
   localStorage.setItem("room_name" , room_name);
   window.location = "kwitter_page.html";
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectroom(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectroom(name) {
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   window.location = "index.html";
}
