import {
    addDoc, collection, getDocs, doc, getDoc, updateDoc, deleteDoc,
    query, onSnapshot
} from 'firebase/firestore';

export class TeacherService {
    static list = (firestoreDB, callback) => {
        //new array

        getDocs(collection(firestoreDB, 'teacher'))
            .then(
                (teacherSnapshot) => {
                    const teachers = [];
                    teacherSnapshot.forEach(
                        (teacherDoc) => {
                            //console.log(teacherDoc.id, ' => ', teacherDoc.data());
                            const { name, course, wage } = teacherDoc.data();
                            teachers.push({ id: teacherDoc.id, name, course, wage });
                            console.log(teachers);
                        }
                    )
                    callback(teachers);
                }
            )
            .catch(error => console.log(error));
    }

    static list_on_snapshot = (firestoreDB, callback) => {
        const q = query(collection(firestoreDB, 'teacher'))
        const unsubscribe = onSnapshot(
            q,
            (querySnapshot) => {
                const teachers = [];
                querySnapshot.forEach(
                    (teacherDoc) => {
                        // console.log(teacherDoc.id, ' => ', teacherDoc.data());
                        const { name, course, wage } = teacherDoc.data();
                        console.log(teachers);
                        teachers.push({ id: teacherDoc.id, name, course, wage });
                    }
                )
                callback(teachers);
            }
        )
    }

    static add = (firestoreDB, callback, teacher) => {
        addDoc(collection(firestoreDB, 'teacher'), teacher)
            .then(
                (teacherDoc) => {
                    callback(teacherDoc.id);
                }
            )
            .catch(error => console.log(error));
    }

    static retrieve = (firestoreDB, callback, id) => {
        getDoc(doc(firestoreDB, 'teacher', id))
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

    static update = (firestoreDB, callback, id, teacher) => {
        updateDoc(
            doc(firestoreDB, 'teacher', id),
            teacher
        )
            .then(
                () => {
                    callback(true);
                }
            )
            .catch(error => console.log(error));


    }

    static delete = (firestoreDB, callback, id) => {
        deleteDoc(doc(firestoreDB, 'teacher', id))
            .then(
                () => {
                    callback(true);
                }
            )
            .catch(error => console.log(error));
    }
}