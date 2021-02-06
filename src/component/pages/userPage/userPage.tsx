import React, {useEffect} from 'react';
import * as firebase from "firebase";

const UserPage = () => {
    // useEffect(
    //     ()=>{
    //         const db = firebase.default.database()
    //         const name = db.ref('name')
    //             name.on('value',(el=> el.val()))
    //         console.log(db);
    //         console.log(name);
    //
    //     },[]
    // )
    useEffect(()=>{
        const user = firebase.default.auth().currentUser;
       // var name, email, photoUrl, uid, emailVerified;
        let  name, email, photoUrl, uid, emailVerified;

        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                             // this value to authenticate with your backend server, if
                             // you have one. Use User.getToken() instead.
            console.log(name, email, photoUrl, uid, emailVerified);
        }},[])
    return (
        <div>
            UserPage
            {/*{name}*/}
            {/*{user && photoUrl}*/}
        </div>
    );
};

export default UserPage;