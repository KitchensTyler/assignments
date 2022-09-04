import React, { useContext, useEffect } from 'react'
import IssueForm from '../components/IssueForm.js'
import IssueList from '../components/IssueList.js'

import { UserContext } from '../context/UserProvider.js'


export default function Profile(){

  const { getUserIssues, user: {username}, addIssue, issues, } = useContext(UserContext)

  useEffect(() =>{
    getUserIssues()
  }, [])

  return (
    <div className="profile">
      <h1>Welcome, {username}!</h1>
      <h3>Add An Issue</h3>
      <IssueForm addIssue={addIssue}/>
      <h3>Your Issues</h3>
      <IssueList issues={issues} username={username} />
    </div>
  )
}