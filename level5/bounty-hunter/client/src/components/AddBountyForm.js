import { useState } from "react"

export default function AddBountyForm(props){
    const initInputs = {fName: props.fName || "", type: props.type || ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="fName"
                value={inputs.fName}
                onChange={handleChange}
                placeholder="First Name" />
            <input 
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="Affiliation" />
            <button>{props.btnText}</button>
        </form>
    )
}