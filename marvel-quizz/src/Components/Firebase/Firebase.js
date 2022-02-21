import app from "firebase/app"; 

const Config = {

    apiKey: "AIzaSyBNAOBAxk99Y3F3wWyOLG4mBN5VvV0_ONs",
    authDomain: "fafa-marvel-quizz.firebaseapp.com",
    projectId: "fafa-marvel-quizz",
    storageBucket: "fafa-marvel-quizz.appspot.com",
    messagingSenderId: "823849643946",
    appId: "1:823849643946:web:32e32f5f696ad6643d85d3",
    measurementId: "G-9DXQER0R8E" 
  };
  
class Firebase {
    constructor(Config){
        app.initializeApp()
    }
  
}

export default Firebase