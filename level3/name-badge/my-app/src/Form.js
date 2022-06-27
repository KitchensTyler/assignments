import {React, useState} from "react"
import './App.css'
import Badge from'./Badge.js'

export default function Form() {
    const [formData, setFormData] = useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            birth: "", 
            phone: "",
            favFood: "",
            comment: ""
        }
    )
    
    const [badgeArr, setBadgeArr] = useState([])
    
    function handleChange(event) {
        
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
      event.preventDefault() 
      setBadgeArr(prevBadgeArr => {
        return([
                ...prevBadgeArr, formData
            ])
      }) 
    } 
    
    const badges = badgeArr.map(badge => {
        return <Badge {...badge} />
    })


 console.log(badgeArr)

    return (
        <>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <input
                type="text"
                minLength={3}
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                required
            />
            <input
                type="text"
                minLength={3}
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                required
            />
            <input
                type="email"
                minLength={3}
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                required
            />
            <input
                type="text"
                minLength={3}
                placeholder="Place of Birth"
                onChange={handleChange}
                name="birth"
                value={formData.birth}
                required
            />
            <input
                type="number"
                minLength={3}
                placeholder="Phone"
                onChange={handleChange}
                name="phone"
                value={formData.phone}
                required
            />
            <input
                type="text"
                minLength={3}
                placeholder="Favorite Food"
                onChange={handleChange}
                name="favFood"
                value={formData.favFood}
                required
            />
            <textarea 
                value={formData.comment}
                minLength={3}
                placeholder="Tell us about yourself"
                onChange={handleChange}
                name="comment"
            />
              <button className="button">Submit</button>
          </div>
          </form>
          {badges} 
          </>
          )
        }