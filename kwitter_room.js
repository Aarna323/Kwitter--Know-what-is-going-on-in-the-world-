
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBKri2fvQiB0Ltq2mAHzrXRFaKPACXt1X4",
      authDomain: "kwitter-80893.firebaseapp.com",
      databaseURL: "https://kwitter-80893-default-rtdb.firebaseio.com",
      projectId: "kwitter-80893",
      storageBucket: "kwitter-80893.appspot.com",
      messagingSenderId: "69431082289",
      appId: "1:69431082289:web:535c4ed4688067085ec410"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " +user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("room name - " +Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='reDirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addroom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}
function reDirectToRoomName(name)
{
      console.log(name);
      localStorage.getItem("room_name" , name);
      window.location = "kwitter_page.html";
      
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}