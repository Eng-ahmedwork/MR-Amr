// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBESfuCbSeTeB38uom23sfilJaJpQlX8tY",
    authDomain: "face-id-96305.firebaseapp.com",
    databaseURL: "https://face-id-96305-default-rtdb.firebaseio.com",
    projectId: "face-id-96305",
    storageBucket: "face-id-96305.firebasestorage.app",
    messagingSenderId: "742706120035",
    appId: "1:742706120035:web:91c02caba5bb897c0f7f56",
    measurementId: "G-30XJ8GFJRQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
