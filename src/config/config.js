import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDeVqZnXhVF9uDenwn53tIjkS1LEKFm-BY",
    authDomain: "goldproffesional.firebaseapp.com",
    projectId: "goldproffesional",
    storageBucket: "goldproffesional.appspot.com",
    messagingSenderId: "842881508739",
    appId: "1:842881508739:web:a4e93ad970f870bc50c2b6"
};


const fb= firebase.initializeApp(firebaseConfig)
const db = fb.firestore()
export {db}