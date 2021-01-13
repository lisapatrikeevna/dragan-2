import React, {useEffect} from 'react';
import * as firebase from "firebase";

const UserPage = () => {
    useEffect(
        ()=>{
            const db = firebase.default.database()
            const name = db.ref('name')
                name.on('value',(el=> el.val()))
            console.log(db);
            console.log(name);
        },[]
    )
    return (
        <div>

        </div>
    );
};

export default UserPage;