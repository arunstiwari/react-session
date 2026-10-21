import {useEffect, useState} from "react";
import StudentsForm from "./students/StudentForm.tsx";
import {type Student } from './students/Student.ts'
import StudentsList from "./students/StudentList.tsx";
import {fetchStudents, persistStudents} from "./api/studentapi.ts";

const StudentApp = () => {
    const [students, setStudents] = useState<Student[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{
        //1. That is something we want component to do on first rendering
        fetchStudents().then(students => {
            console.log(students)
            setStudents(students)
            setLoading(false)
        })
        //2. Cleanup or unmounting
           return () => {
            console.log("cleaning up students component");
        }
    },[]) //3. Dependencies



    const newStudentRegistration = (form: Student) => {
        console.log("StudentApp: ",form)
        persistStudents(form)
        setStudents([...students , form])
    }

    return (
        <div>
            <StudentsForm registerStudent={ newStudentRegistration } />
            {loading? <p>Loading...</p>:
            <StudentsList students={students}></StudentsList>}
        </div>
    );
}

export default StudentApp