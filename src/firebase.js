import firebase from 'firebase'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
 var config = {
    apiKey: "AIzaSyB8h-T1dDRR73LrvOpULp3m0ad5xi2CBXM",
    authDomain: "vokie-afd64.firebaseapp.com",
    databaseURL: "https://vokie-afd64.firebaseio.com",
    projectId: "vokie-afd64",
    storageBucket: "vokie-afd64.appspot.com",
    messagingSenderId: "858343933650"
  };
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const authUi = new firebaseui.auth.AuthUI(auth);
export default firebase;