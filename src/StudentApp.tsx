import {useState} from "react";

export type Student = {
    admissionNumber: number
    name: string
    email: string
}

const studentsList: Student[] = [
    {admissionNumber: 1, name: "Student1", email: "student1@demo.com"},
    {admissionNumber: 2, name: "Student2", email: "student2@demo.com"},
    {admissionNumber: 3, name: "Student3", email: "student3@demo.com"},
]

const Student = ({student}:{student: Student}) => {
    return (
        <li key={student.admissionNumber}>{student.name}</li>
    )
}

const StudentsList = ({students}: {students: Student[]}) => {
    return (
        <div>
            <h2>List of Students:</h2>
            <ul>
            {students.map(student => (
                <Student  student={student} />

            ))}
            </ul>
        </div>
    )
}

const StudentsForm = ({registerStudent}:{registerStudent: any}) => {
    const [form, setForm] = useState({admissionNumber: 0, name: "", email: "" })

    const handleNewRegistration = (event) => {
        event.preventDefault()
        console.log("Registration New Student")
        //validation logic
        registerStudent(form)
        setForm({admissionNumber: 0, name: "", email: "" })
    }

    const handleFormChange = (event) => {
        const {name, value} = event.target
        console.log("form change : ", name, value)
        setForm({...form, [name]: value})
    }

    return (
        <div>
            <h3>Students Registration</h3>
            <form onSubmit={handleNewRegistration}>
                <input type="number" placeholder="Admission Number" name="admissionNumber"
                       value={form.admissionNumber}  onChange={handleFormChange} />
                <input type="text" placeholder="Name" value={form.name}
                       name="name"  onChange={handleFormChange} />
                <input type="email" placeholder="Email" name="email"
                       value={form.email} onChange={handleFormChange} />
                <button type="submit">Register Student</button>
            </form>
        </div>
    )
}


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