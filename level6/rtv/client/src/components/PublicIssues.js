import React, {useContext, useState, useEffect} from 'react'
import { UserContext } from '../context/UserProvider.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons'



export default function PublicIssues(props){
  const {author, title, description, datePosted, _id, likes, dislikes, username, } = props

  const { userAxios, getUserIssues, user, allUsers} = useContext(UserContext)

  const [issueComments, setIssueComments ] = useState([])

  const [showComments, setShowComments ] = useState(false)

  const initInputs = {comment: ''}

  const [inputs, setInputs] = useState({initInputs})

 

  function newGetComments(issueId){
    userAxios.get(`api/issue/comments/${issueId}/comments`)
    .then(res => setIssueComments(res.data))
    .catch(err => console.log(err.response.data.errMsg))
}

function addComment(issueId, newComment){
  userAxios.post(`api/issue/comments/${issueId}/comments`, newComment)
    .then(res => setIssueComments(prevState => [...prevState, res.data]))
    .catch(err => console.log(err.response.data.errMsg))
}

function onChange(e) {
const {name, value} = e.target
setInputs(prevState => ({...prevState, [name]: value}))
}

function submitComment(e){
e.preventDefault();
addComment(_id, inputs);
setInputs({ comment: ""})
}

const [likesCount, setLikesCount] = useState(likes.length)
const [dislikesCount, setDislikesCount] = useState(dislikes.length)

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

useEffect(()=> {  
  newGetComments(_id)
  getUserIssues(_id)
 
}, [])


return(
<div className="issue-container">
  <div className="vote-container">

      
      {/* <FontAwesomeIcon icon={faSpinner} size="6x" spin /> */}
    
  </div>
  <div className="publicIssue">
  <h2>  {allUsers.find(u => u._id === author).username} Says: {title} </h2>
      <h2>{description}</h2>
      <h3> posted on {new Date(datePosted).toLocaleDateString()}</h3>
      <h1 className="like-container"><FontAwesomeIcon onClick={handleUpvote} className="like-icon" icon={faThumbsUp} size="lg"/>{`${likesCount}`}</h1>
      <h1 className="dislike-container"><FontAwesomeIcon onClick={handleDownVote} className="dislike-icon" icon={faThumbsDown} size="lg"/>{`${dislikesCount}`}</h1>
      {!showComments ? 
      <button className="comment-button" onClick={() => setShowComments(!showComments)}>show</button>:
      <button className="comment-button" onClick={() => setShowComments(!showComments)}>hide</button>}
      {showComments ? <div>
          {issueComments.map(comment => {
              return <div key={comment._id} className="public-comment">
                  <small className='public-comment-user'>{allUsers.find(u => u._id === comment.user.username)}</small>
                  <p>{comment.comment}</p><button className="delete-button"onClick={()=> {
                      if(user._id === comment.user){
                              userAxios.delete(`api/issue/comments/${_id}/comments/${comment._id}`)
                              .then(res => {
                                  newGetComments(_id)
                                  alert(`Successfully deleted the comment`)
                              })
                              .catch(err => console.log(err))
                      } else {
                          alert("you can't delete this comment")
                      }
                  }}>Delete Comment</button>
                  </div>
          })}
      <form onSubmit={submitComment}>
          <input
          type="text"
          name="comment"
          onChange={onChange}
          value={inputs.comment}
          placeholder=" add Comment"
          className="add-comment"
          />
          <button>send</button>
      </form>
      </div>: null}
  </div>

</div>
)
}