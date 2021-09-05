// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuSF3Kq17RrPxQ6XSDEdpBf3mzQ2l1tBI",
    authDomain: "kwitter-project-1ad39.firebaseapp.com",
    databaseURL: "https://kwitter-project-1ad39-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-1ad39",
    storageBucket: "kwitter-project-1ad39.appspot.com",
    messagingSenderId: "145577813725",
    appId: "1:145577813725:web:a91dc662843ca20a7c9d34",
    measurementId: "G-F6W19VVJHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





function add_user() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

}
