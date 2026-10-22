import type {Student} from "./Student.ts";
import StudentRow from "./StudentRow.tsx";

const StudentsList = ({students}: {students: Student[]}) => {
    return (
        <div>
            <h2>List of Students:</h2>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Admission Number</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {students.map(student => (
                    <StudentRow key={student.admissionNumber} student={student} />

                ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentsList;