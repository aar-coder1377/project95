// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAN-tgAJ2W1_Kz4LD1p21BAjXeW8ylXlW0",
    authDomain: "kwitterapp-29564.firebaseapp.com",
    projectId: "kwitterapp-29564",
    storageBucket: "kwitterapp-29564.appspot.com",
    messagingSenderId: "241328383398",
    appId: "1:241328383398:web:02e9bd1a012e773500db67",
    measurementId: "G-9EF8QESB6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name;

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";


}

