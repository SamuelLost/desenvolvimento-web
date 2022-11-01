import {addDoc, collection, getDocs, doc, getDoc, updateDoc} from 'firebase/firestore';

export class StudentService {
    static list = (firestoreDB, callback) => {
        //new array
        
        getDocs(collection(firestoreDB, 'student'))
        .then(
            (studentSnapshot) => {
                const students = [];
                studentSnapshot.forEach(
                    (studentDoc) => {
                        // console.log(studentDoc.id, ' => ', studentDoc.data());
                        const {name, course, ira} = studentDoc.data();
                        students.push({id: studentDoc.id, name, course, ira});
                    }
                )
                callback(students);
            }
        )
        .catch(error => console.log(error));
    }

    static add = (firestoreDB, callback, student) => {
        addDoc(collection(firestoreDB, 'student'), student)
        .then(
            (studentDoc) => {
                callback(studentDoc.id);
            }
        )
        .catch(error => console.log(error));
    }

    static retrieve = (firestoreDB, callback, id) => {
        getDoc(doc(firestoreDB, 'student', id))
        .then(
            (docSnap) => {
                if (docSnap.exists()) {
                    //const {name, course, ira} = docSnap.data();
                    //callback({id: docSnap.id, name, course, ira});
                    //console.log('Document data:', docSnap.data());
                    callback(docSnap.data());
                }
            }
        )
        .catch(error => console.log(error));
    }

    static update = (firestoreDB, callback, id, student) => {
        updateDoc(
            doc(firestoreDB, 'student', id), 
            student
        )
        .then(
            () => {
                callback(true);
            }
        )
        .catch(error => console.log(error));

        
    }
}