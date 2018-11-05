import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDDouA4l4VnZ5DJi33hvLFDHJBNLjEAfZk",
  authDomain: "moodtracker-9b751.firebaseapp.com",
  databaseURL: "https://moodtracker-9b751.firebaseio.com",
  projectId: "moodtracker-9b751",
  storageBucket: "moodtracker-9b751.appspot.com",
  messagingSenderId: "113530419236"
};
firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

const settings = {
  timestampsInSnapshots: true
};
db.settings(settings);

const usersCollection = db.collection("users");
const moodsCollection = db.collection("moods");

export { db, auth, currentUser, usersCollection, moodsCollection };
