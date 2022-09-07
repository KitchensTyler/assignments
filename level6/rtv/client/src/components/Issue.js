import React, {useContext, useEffect, useState} from 'react'
import { UserContext } from '../context/UserProvider'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons'


export default function Issue(props){
  const {user, title, description, datePosted, _id, username, likes, dislikes} =props
  const { userAxios, getUserIssues } = useContext(UserContext)
 
  const [likesCount, setLikesCount] = useState(likes.length)
  const [dislikesCount, setDislikesCount] = useState(dislikes.length)

  const [inputs, setInputs] = useState({ comment: "" })
  const [issueComments, setIssueComments] = useState([])

  function newGetComments(_id) {
    userAxios.get(`api/issue/comments/${_id}/comments`)
      .then(res => setIssueComments(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addIssueComment(issueId, newComment) {
    userAxios.post(`api/issue/comments/${issueId}/comments`, newComment)
      .then(res => setIssueComments(prevState => [...prevState, res.data]))
      .catch(err => console.log(err.response.data.errMsg))
  }

  useEffect(() => {
    newGetComments(_id)
    getUserIssues(_id)
    // eslint-disable-next-line
  }, [])

  function onChange(e) {
    const { name, value } = e.target
    setInputs(prevState => ({ ...prevState, [name]: value }))

  }

  function submission(e) {
    e.preventDefault()
    addIssueComment(_id, inputs)
  }

function handleUpvote(){
    console.log('pressed')
    userAxios.put(`/api/issue/upvote/${_id}`)
    .then( res => {
        setLikesCount(res.data.likes.length)
        setDislikesCount(res.data.dislikes.length)
    })
    .catch(err => console.log(err))
}

function handleDownVote(){
  console.log('pressed down')
  userAxios.put(`/api/issue/downvote/${_id}`)
  .then( res => {
      console.log(dislikes.length)
      setDislikesCount(res.data.dislikes.length)
      setLikesCount(res.data.likes.length)
  })

  .catch(err => console.log(err))
}

  return (
    <div className="issue">
      <p>{username}</p>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h1 className="like-container"><FontAwesomeIcon onClick={handleUpvote} className="like-icon" icon={faThumbsUp} size="lg"/>{`${likesCount}`}</h1>
      <h1 className="dislike-container"><FontAwesomeIcon onClick={handleDownVote} className="dislike-icon" icon={faThumbsDown} size="lg"/>{`${dislikesCount}`}</h1>
      <h3> posted on {new Date(datePosted).toLocaleDateString()}</h3>
      <div>
        {issueComments.map(comment => <div>{comment.comment}</div>)}
      </div>
      <form onSubmit={submission}>
        <input 
          onChange={onChange}
          name="comment"
          type="text"
          value={inputs.comment}
          placeholder="Enter comment here..."/>
          <button>Submit</button>
      </form>
    </div>
  )
}
