function adduser() {
    username + document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.location = "kwitter_room.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyCFdNYHOn434IwEmkjFXPspPpx2FO85Px4",
    authDomain: "project94-511a1.firebaseapp.com",
    projectId: "project94-511a1",
    storageBucket: "project94-511a1.appspot.com",
    messagingSenderId: "681557759963",
    appId: "1:681557759963:web:0d08d68e2cbeb0101fb9fe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);