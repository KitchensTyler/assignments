import React from "react"
import { useParams } from "react-router-dom" 
import serviceData from "./serviceData" 

function ServiceDetails() {
    const {serviceId} = useParams()
    const foundService = serviceData.find(service => service._id === serviceId)//params 4
  
    
    return (
        
        <div>
            <h1>Service Detail Page</h1> {/**params 5 */}
            <h3>{foundService.name} - ${foundService.price}</h3> {/**params 5 */}
            <p>{foundService.description}</p> {/**params 5 */}
        </div>
    )
}

export default ServiceDetails