import React from 'react' 
import {useNavigate, Link} from 'react-router-dom'; // p5 import Link
import serviceData from "./serviceData" //params 1

export default function Services() {

    const navigate = useNavigate() 
    
    const services = serviceData.map(service => (// params 2
      <h3 key={service._id}>  {/* params 3 */}
          <Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}  {/* params 4 */}
      </h3> /* params 3 */
  )) /* params 2 */
    return (
      <div style={{ padding: 20 }}>
        <h1>Our Services </h1>
        
        <p>We include everything you need from parts you need for purchase all the way to professional installation and emergency repair and response. </p>
        <p>We also include FREE consultaion and inspection. </p>
             <button onClick={()=> navigate("/checkout")}>Check Out</button>
             <button onClick={()=> navigate("/")}>Return to Home</button> 
             <button onClick={()=> navigate(1)}>Go Forward </button> 
             <button onClick={()=> navigate(-1)}>Go Back </button> 
              
             <div>
              <h2>Services List Page</h2>
              {services}
            </div>
      </div>
    );
  }