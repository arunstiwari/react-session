import {type Student} from './Student'
const StudentRow = ({student}:{student: Student}) => {
    return (
        <li key={student.admissionNumber}>{student.name}</li>
    )
}

export default StudentRow