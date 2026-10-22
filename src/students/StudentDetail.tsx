import {useEffect, useState} from "react";
import type {Student} from "./Student.ts";
import {fetchStudentDetail} from "../api/studentapi.ts";
import {useParams} from "react-router";

const StudentDetail  = () => {
    const {id} = useParams()
    const [student, setStudent] = useState<Student | null>(null);

    useEffect(() => {
        if(!id)
            return;
        fetchStudentDetail(id)
            .then(student => {
            setStudent(student)
        })
    },[id])
    return (
        <section className="student-detail">
            <>
                <h2>{student?.id}</h2>
                <h2>{student?.name}</h2>
                <p>{student?.email}</p>
                <p>{student?.admissionNumber}</p>
            </>
        </section>
    )
}

export default StudentDetail;