import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "./firebase.config";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const getNavigation = () => {
  let navigation = [];

  db.collection("MainNavigation").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      navigation.push({
        id: doc.id,
        data: doc.data()
      });
    });
  });

  return navigation;
}