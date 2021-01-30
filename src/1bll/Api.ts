import * as firebase from 'firebase';

export const firebaseConfig={
    apiKey: "AIzaSyDGqV4nDHMokspRbNj9OufL531PwdNB2sc",
    authDomain: "fir-silky.firebaseapp.com",
    databaseURL: "https://fir-silky-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-silky",
    storageBucket: "fir-silky.appspot.com",
    messagingSenderId: "459950163847",
    appId: "1:459950163847:web:2f94e0b34b0c77d10cb522"
}

// const bd = firebase.database
//     service cloud.firestore {
//         match /databases/{database}/documents {
//         // Make sure the uid of the requesting user matches name of the user
//         // document. The wildcard expression {userId} makes the userId variable
//         // available in rules.
//         match /users/{userId} {
//             allow read, update, delete: if request.auth != null && request.auth.uid == userId;
//             allow create: if request.auth != null;
//         }
//     }
// }