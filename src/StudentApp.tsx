import {useState} from "react";
import StudentsForm from "./students/StudentForm.tsx";
import {type Student } from './students/Student.ts'
import StudentsList from "./students/StudentList.tsx";


const studentsList: Student[] = [
    {admissionNumber: 1, name: "Student1", email: "student1@demo.com"},
    {admissionNumber: 2, name: "Student2", email: "student2@demo.com"},
    {admissionNumber: 3, name: "Student3", email: "student3@demo.com"},
]


const StudentApp = () => {
    const [students, setStudents] = useState<Student[]>(studentsList)

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