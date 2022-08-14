import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'

export default function Bounty(props){
    const { fName, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    return(
        <div className='bounty'>
            { !editToggle ?
            <>
            <h1>Title: {fName}</h1>
            <p>Type: {type} </p>
            <button 
            className='dlete-btn'
            onClick={() => props.deleteBounty(_id)}>Delete</button>
            <button
                className='edit-btn'
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                </button>
            </>
            :
            <>
            <AddBountyForm 
                fName={fName}
                type={type}
                _id={_id}
                btnText="Submit Edit"
                submit={props.editBounty}
            />
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Close</button>
            </>
            }
        </div>
    )
}