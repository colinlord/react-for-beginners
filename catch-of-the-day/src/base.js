import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCuSyoVoFnCt9cC2aZ7hNeebAyNUBwdwe0",
  authDomain: "catch-of-the-day-kt4atl.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kt4atl.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// This is a default export
export default base;
