import firebase from 'firebase'
import _ from 'lodash';

export class Database {
  constructor() {
    if (!global.firebase) {
      global.firebase = firebase
      global.firebase.initializeApp({
        apiKey: "AIzaSyCeQ3z1Jo0iZPb6kBiyw5AW50XjPTbLJHU",
        authDomain: "doijukebox.firebaseapp.com",
        projectId: "doijukebox"
      })
    }
  }

  get(query) {
    return new Promise((resolve, reject) => {
      global.firebase.firestore()
      .collection("videos")
      // .where("title", "==", "oldboy")
      .get()
      .then((querySnapshot) => {
        resolve(querySnapshot.docs.map(doc => (_.extend({id: doc.id}, doc.data()))))
      }).catch(e => {
        reject(e)
      });
    })
  }

  update(target, query) {
    return new Promise((resolve, reject) => {

    })
  }  

  delete(target) {
    return new Promise((resolve, reject) => {

    })
  }
}
