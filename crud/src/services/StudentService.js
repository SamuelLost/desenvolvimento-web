import {collection, getDocs} from 'firebase/firestore';

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
    }
}