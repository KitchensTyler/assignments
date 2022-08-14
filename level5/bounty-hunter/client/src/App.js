import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './/components/Bounty.js'
import AddBountyForm from './/components/AddBountyForm.js'
import "./App.css"

// var heads = { crossDomain: true, "Content-Type": "application/json"}
// axios.delete (API, data, {headers:heads})

export default function App(){
  const [bounties, setBounties] = useState([])

    function getBounties(){
      axios.get("http://localhost:9000/bounties")
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
    }

    function addBounty(newBounty){
      axios.post("http://localhost:9000/bounties", newBounty)
        .then(res => {
          setBounties(prevBounties => [...prevBounties, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteBounty(bountyId){
      axios.delete(`http://localhost:9000/bounties/${bountyId}`)
        .then(res => {
          setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
        })
        .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId){
      axios.put(`http://localhost:9000/bounties/${bountyId}`, updates)
        .then(res => {
          setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
      getBounties()
    }, [])

    return (
      <>
        <div className='bounty-container'>
          <AddBountyForm
            submit={addBounty}
            btnText="Add Bounty"
            />
            {
              bounties.map(bounty =>
                <Bounty 
                {...bounty}
                key={bounty._id}
                deleteBounty={deleteBounty}
                editBounty={editBounty} />)
            }
        </div>
      </>
    )
  }