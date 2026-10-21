import type {Student} from "./Student.ts";
import StudentRow from "./StudentRow.tsx";

const StudentsList = ({students}: {students: Student[]}) => {
    return (
        <div>
            <h2>List of Students:</h2>
            <ul>
                {students.map(student => (
                    <StudentRow key={student.admissionNumber} student={student} />

                ))}
            </ul>
        </div>
    )
}

export default StudentsList;