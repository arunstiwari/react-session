import {type Student} from './Student'
import {NavLink} from "react-router";
const StudentRow = ({student}:{student: Student}) => {
    return (
        // <li key={student.admissionNumber}>{student.name}</li>
        <tr key={student.id}>
           <td> <NavLink to={`/students/${student.id}`}>{student.id}</NavLink></td>
            <td>{student.admissionNumber}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
        </tr>

    )
}

export default StudentRow