import firebase  from 'firebase/app';

const firebaseCredentials = {
    apiKey: "AIzaSyB5XPlStrzWsPsiuTu5IhEtICeFzviJd24",
    authDomain: "rnbin-108e3.firebaseapp.com",
    databaseURL: "https://rnbin-108e3.firebaseio.com",
    projectId: "rnbin-108e3",
    storageBucket: "rnbin-108e3.appspot.com",
    messagingSenderId: "781486013176"
}

require('firebase/database');

const mainApp = firebase.initializeApp(firebaseCredentials);

let snippetsAdhocRef;

const listen = (ref, callback) => {
    return ref.on("value", snapshot => {
        callback.call(this, snapshot.val());
    })
}

const configureFirebase = () => {
    snippetsAdhocRef = mainApp.database().ref("bins");
}

export const listenToState_adhock = (id, callback) => {
    const _stateRef = snippetsAdhocRef.child(id).child('workingCopy');

    return listen(_stateRef, callback);
}

configureFirebase();