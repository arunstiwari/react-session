import {useEffect, useState} from "react";
import StudentsForm from "./students/StudentForm.tsx";
import {type Student } from './students/Student.ts'
import StudentsList from "./students/StudentList.tsx";

// const studentsList: Student[] = [
//     {admissionNumber: 1, name: "Student1", email: "student1@demo.com"},
//     {admissionNumber: 2, name: "Student2", email: "student2@demo.com"},
//     {admissionNumber: 3, name: "Student3", email: "student3@demo.com"},
// ]

const fetchStudents = async () => {
    // 1. API Call
    const students = await fetch("http://localhost:3002/students",  {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })
    if(students.ok){
        return students.json()
    }else {
        console.error("Error fetching students...");
    }
}

const StudentApp = () => {
    const [students, setStudents] = useState<Student[]>([])

    useEffect(()=>{
        //1. That is something we want component to do on first rendering
        fetchStudents().then(students => {
            console.log(students)
            setStudents(students)
        })
        //2. Cleanup or unomunting
           return () => {
            console.log("cleaning up students component");
        }
    },[]) //3. Dependencies



    const newStudentRegistration = (form: Student) => {
        console.log("StudentApp: ",form)
        setStudents([...students , form])
    }

    return (
        <div>
            <StudentsForm registerStudent={ newStudentRegistration } />
            <StudentsList students={students}></StudentsList>
        </div>
    );
}

export default StudentApp