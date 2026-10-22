import {useState} from "react";

type StudentError = {
    message: string
    field: string
}
const StudentsForm = ({registerStudent}:{registerStudent: any}) => {
    const [form, setForm] = useState({admissionNumber: 0, name: "", email: "" })
    const [errors, setErrors] = useState<StudentError>({field: "", message: ""})

    const handleNewRegistration = (event: any) => {
        event.preventDefault()
        console.log("Registration New Student")
        if (form.name === "") {

            setErrors({field: "name", message: "Name is required"})
        }
        if (form.email === "") {
            setErrors({field: "email", message: "Email is required"})
        }
        registerStudent(form)
        setForm({admissionNumber: 0, name: "", email: "" })
    }

    const handleFormChange = (event: any) => {
        const {name, value} = event.target
        // console.log("form change : ", name, value)
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
                {errors.field === "name" && <span className="field-error">{errors.message}</span>}
                <input type="email" placeholder="Email" name="email"
                       value={form.email} onChange={handleFormChange} />
                <button type="submit">Register Student</button>
            </form>
        </div>
    )
}

export default StudentsForm