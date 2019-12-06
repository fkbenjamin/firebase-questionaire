import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyA55UWYCzrd9h9UZwwYv-A9VVkchU3QHGQ",
  authDomain: "firefly-test-b0d7e.firebaseapp.com",
  databaseURL: "https://firefly-test-b0d7e.firebaseio.com",
  projectId: "firefly-test-b0d7e",
  storageBucket: "firefly-test-b0d7e.appspot.com",
  messagingSenderId: "950505708047",
  appId: "1:950505708047:web:30eb19940021390a83e17a",
  measurementId: "G-5W64Q87WXL"
};

var fire = firebase.initializeApp(firebaseConfig);
export default fire;
