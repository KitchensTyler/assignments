import React from 'react'
import './App.css';

function App() {
const [namesList, setNamesList] = React.useState([])
const [newName, setNewName] = React.useState('')

function handleChange(event) {
  setNewName(event.target.value)
}

function handleAdd(event){
  event.preventDefault()
  setNamesList(namesList =>[...namesList, newName])
  console.log(namesList)
  setNewName("")
}

const nameArray = namesList.map(name => <li key={name}>{name}</li>)

  return (
      <form onSubmit={handleAdd}>
      <h1>{newName}</h1>
        <input 
          type="text"
          placeholder='Name'
          onChange={handleChange}
          value={newName}
        />
        <button>Add</button>
        <ol>
          {nameArray}
        </ol>
    </form>
  );
}

export default App;
