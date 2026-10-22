import {type Student} from './Student'
import {NavLink} from "react-router";
const StudentRow = ({student}:{student: Student}) => {
    return (
        // <li key={student.admissionNumber}>{student.name}</li>
        <NavLink to={`/students/${student.id}`}>{student.name}</NavLink>
    )
}

export default StudentRow