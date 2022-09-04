import React, {useContext, useEffect} from 'react'
import {UserContext} from '../context/UserProvider.js'
import PublicIssues from '../components/PublicIssues.js'




export default function Public() {


  const { getAllIssues, allIssues, getAllUsers } = useContext(UserContext)


    const issueDisplay = allIssues.map(issue => {
        return <PublicIssues key={issue._id} author={issue.user} {...issue}/>
    })

    useEffect(() => {
        getAllIssues();
        getAllUsers(); 
    }, [allIssues.length])

  return (
    <div>
      {issueDisplay}
    </div>
  )
}