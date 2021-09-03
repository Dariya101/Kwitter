
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAhYMC2qDvNd_XkF77xd7R9UxGHo-VwQSg",
      authDomain: "kwitter-5a675.firebaseapp.com",
      databaseURL: "https://kwitter-5a675-default-rtdb.firebaseio.com",
      projectId: "kwitter-5a675",
      storageBucket: "kwitter-5a675.appspot.com",
      messagingSenderId: "144250622258",
      appId: "1:144250622258:web:e78a417b31b7eb7844072b",
      measurementId: "G-DR603FH7HV"
    };
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    
    function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

