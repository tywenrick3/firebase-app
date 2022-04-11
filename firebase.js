// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBh2njqzr-g8VKgdU_4UIFkLm3UyD0Ci34',
  authDomain: 'fir-auth-d6140.firebaseapp.com',
  projectId: 'fir-auth-d6140',
  storageBucket: 'fir-auth-d6140.appspot.com',
  messagingSenderId: '336643944795',
  appId: '1:336643944795:web:240c5c636a573240f12a7e',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();

export {auth};
