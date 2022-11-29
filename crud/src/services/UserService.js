import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export class UserService {

    static signUp = (auth, email, password, callback) => {
        createUserWithEmailAndPassword(
            auth, 
            email, 
            password
        )
        .then(
            (userCredential) => {
                // Signed in 
                console.log(userCredential);
            }
        )
        .catch(
            (error) => {
                const errorCode = error.code;
                console.log(errorCode);
            }
        );
    }

    static signIn = (auth, email, password, callback) => {
        signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        .then(
            (userCredential) => {
                // Signed in 
                console.log(userCredential);
                callback(true, userCredential);
            }
        )
        .catch(
            (error) => {
                console.log(error.code);
                console.log(false, error.code);
            }
        )
    }
}