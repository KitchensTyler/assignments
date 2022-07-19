import React, { useState, useContext } from "react";
import { UglyContext } from "./UglyContext";

function Thing(props){
const {title, description, imgUrl, deleteUglyThing, _id, updateUglyThing} = props

const {newInput, setNewInput} = useContext(UglyContext)

const [editMode, setEditMode] = useState(false)

function editThing(e){
    e.preventDefault()

    updateUglyThing(_id, newInput)
    setNewInput({
        title: "",
        description:"",
    })
    setEditMode(false)
}

function deleteThing(e){
    e.preventDefault()
    deleteUglyThing(_id)
}

function handleChange(event){
    const {name, value} = event.target
    setNewInput(prevThing => ({...prevThing, [name]: value}))
}

return (
    <>
    {!editMode &&
        <div>
            <h1 className="title">{title}</h1>
            <img src={imgUrl} alt=""></img>
            <h3 className="description">{description}</h3>
                <div className="buttonContainer">
                    <button onClick={setEditMode} className='editBtn'>Edit</button>
                    <button onClick={deleteThing} className='deleteBtn'>Delete</button>
                </div>
            </div>
        }
        
    {editMode &&
        <div>
            <input
            name="title"
            onChange={handleChange}
            placeholder={title}
            value={newInput.title}
            />
            <img src={imgUrl} alt=""></img>
            <input
            name="description"
            onChange={handleChange}
            placeholder={description}
            value={newInput.description}
            />
            <button onClick={editThing}>Save</button>
    </div>}

    </>
)
}
export default Thing                             