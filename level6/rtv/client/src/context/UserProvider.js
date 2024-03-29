import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = {
         user: JSON.parse(localStorage.getItem("user")) || {}, 
         token: localStorage.getItem("token")  || "",
         issues: [],
         errMsg: ""
        }

    const [userState, setUserState] = useState(initState)
    const [allIssues, setAllIssues] = useState([])
    const [allUsers, setAllUsers] = useState([])

   

    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            })) 
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserIssues()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err =>handleAuthErr(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            getUserIssues: []
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState( prevState => ({
            ...prevState, 
            errMsg: ""
        }))
    }


    function getUserIssues(){
        userAxios.get("/api/issue/user")
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: res.data,
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addIssue(newIssue){
        userAxios.post("/api/issue", newIssue)
            .then( res => {
              setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
              }))  
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getAllIssues(){
        userAxios.get('/api/issue/')
        .then(res => setAllIssues(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    function getAllUsers(){
        userAxios.get('/api/user')
        .then(res => setAllUsers(res.data))
        .catch(err => console.log(err.esponse.data.errMsg))
    }

    return(
        <UserContext.Provider 
        value={{
            ...userState,
            allIssues,
            signup,
            login,
            logout, 
            addIssue,
            resetAuthErr,
            getUserIssues,
            getAllIssues,
            getAllUsers,
            allUsers,
            userAxios

        }}>
            {props.children}
        </UserContext.Provider>
    )
}