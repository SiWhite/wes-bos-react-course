import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCXGkdm65Dmqxoq9NrD43WuXXiOyxfXC0k",
  authDomain: "catch-of-the-day-f5181.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-f5181.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;
