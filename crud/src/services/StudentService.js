import {
    addDoc, collection, getDocs, doc, getDoc, updateDoc, deleteDoc,
    query, onSnapshot
} from 'firebase/firestore';

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
                            const { name, course, ira } = studentDoc.data();
                            students.push({ id: studentDoc.id, name, course, ira });
                        }
                    )
                    callback(students);
                }
            )
            .catch(error => console.log(error));
    }

    static list_on_snapshot = (firestoreDB, callback) => {
        const q = query(collection(firestoreDB, 'student'))
        const unsubscribe = onSnapshot(
            q,
            (querySnapshot) => {
                const students = [];
                querySnapshot.forEach(
                    (studentDoc) => {
                        // console.log(studentDoc.id, ' => ', studentDoc.data());
                        const { name, course, ira } = studentDoc.data();
                        students.push({ id: studentDoc.id, name, course, ira });
                    }
                )
                callback(students);
            }
        )
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

    static delete = (firestoreDB, callback, id) => {
        deleteDoc(doc(firestoreDB, 'student', id))
            .then(
                () => {
                    callback(true);
                }
            )
            .catch(error => console.log(error));
    }
}