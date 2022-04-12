
var firebaseConfig = {
      apiKey: "AIzaSyAG1uc8MLcwr0bXyiCpcDfeUjg3LogS-TQ",
      authDomain: "kwitter-d239b.firebaseapp.com",
      databaseURL: "https://kwitter-d239b-default-rtdb.firebaseio.com",
      projectId: "kwitter-d239b",
      storageBucket: "kwitter-d239b.appspot.com",
      messagingSenderId: "1095406260887",
      appId: "1:1095406260887:web:82f4575840d4ef9428cfd2"
    };
    
    // Initialize Firebase
    firebase. initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML=row;

      //End code
      });});}
getData();

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);

      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}