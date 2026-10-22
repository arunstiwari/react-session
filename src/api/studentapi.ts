import type {Student} from "../students/Student.ts";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchStudents = async () => {
    // 1. API Call
    await delay(3000);
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

export const persistStudents = async (student: Student) => {
    const savedStudent = await fetch("http://localhost:3002/students",  {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(student)
    })
    if(savedStudent.ok){
        console.log("Successfully persisted students...")
        return savedStudent.json()
    }else {
        console.error("Error persisting students...");
    }
}

export const fetchStudentDetail = async (id: string) => {
    const student = await fetch(`http://localhost:3002/students/${id}`, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })
    if(student.ok){
        return student.json()
    }
    console.error("Error fetching students...");

}
