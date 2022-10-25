import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../keys/firebase_key';

// const app = initializeApp(firebaseConfig);

export class Firebase {
    constructor() {
       this.app = initializeApp(firebaseConfig);
    }

    getFirestoreDB() {
        return getFirestore(this.app);
    }


}
