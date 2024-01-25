import React, { useState } from "react"

function Input() {
    const [inputs, setInputs] = useState({
        subject: "",
        score: "",
    })

    const onChange = (event) => {
        const { value, name } = event.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    return (<>
        <div>
            <h2>성적: {inputs.subject} {inputs.score}</h2>
            <input 
                name="subject"
                placeholder="수학"
                value={inputs.subject}
                onChange={onChange}
            />
            <input 
                name="score"
                placeholder="90"
                value={inputs.score}
                onChange={onChange}
            />
        </div>
    </>)
}

export default Input