//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
            console.log(firebase_message_id);
            console.log(message_data);
            name = message_data['name'];
            message = message_data['message'];
            like = message_data['like'];
            name_with_tag = "<h4> "+name+"<img class='user_tick' src='tick.png'></h4>";
            message_with_tag = "<h4 class='message_h4'>"+ message+ +"</h4>";
            like_button = "<button class='btn btn-warning' id="+ firebase_message_id+"values="+like+"onclick='updatelike(this.id)'>";
            span_width_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" +like+"</span> </button>";

            row= name_with_tag + message_with_tag + like_button + span_width_tag;
            document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function updatelike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)  +1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });

}
