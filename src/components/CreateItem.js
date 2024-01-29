import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function CreateItem() {

    const [values, setValues] = useState({
        task: "", due: ""
    })

    const handleChange = (event) => {

        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const navigate = useNavigate()


    const onSubmit = (event) => {
        event.preventDefault()

        fetch("http://localhost:3001/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                task: values.task,
                due: values.due,
                status: "todo"
            })
        }).then((res) => {
            if(res.ok) {
                alert("Created new item!")
                navigate("/todo")
            }
        })
    }

    return <form>
        <div className="input_area">
            <p>Task</p>
            <input
                type="text"
                name="task"
                value={values.task}
                onChange={handleChange}
                />
            <p>Due</p>
            <input
                type="text"
                name="due"
                value={values.due}
                onChange={handleChange}
            />
            <br />
            <button onClick={onSubmit}>Create</button>
        </div>
    </form>
}