import app from 'firebase/app'
import 'firebase/auth';


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
    constructor() {
        app.initializeApp(Config);
        this.auth = app.auth();
    }

    //inscription
    signupuser = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password)

    
    //connexion

    loginuser=(email, password)=>
        this.auth.signInWithEmailAndPassword(email, password)
    

    //deconnexion
    signoutuser =()=>
        this.auth.signOut()
    



    

}

export default Firebase