import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJoY-K04mRKkeCTGU9s9mwc00KFjE0VS4",
  authDomain: "ecommerce-7d247.firebaseapp.com",
  databaseURL: "https://ecommerce-7d247.firebaseio.com",
  projectId: "ecommerce-7d247",
  storageBucket: "ecommerce-7d247.appspot.com",
  messagingSenderId: "69704293617",
  appId: "1:69704293617:web:f78bd9a6f3b34326849d50",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider };
