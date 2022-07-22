import React from 'react' //Step 1
import {useNavigate} from 'react-router-dom'; 

export default function About() {
  
  const navigate = useNavigate() 

  return (
    <>
      <div style={{ padding: 20 }}>
        <h1>About Us</h1>
        
      <h4> Founded in 1904 by Brad James, "Hard Stuck Plumbing" has a 100% success rate at dealing with any and all plumbing issues. </h4>
       <p> Here at Hard Stuck Plumbing we strive for exellence in all areas of service. Wether it be a phone call or an in person consultation we promise professionalism and satisfaction. 
        We were founded off of hard work and customer satisfaction. No one wants to deal with the stress of plumbing issues breaking the bank, thats why we offer the best service in the Nation and the lowest cost.
      </p>
      </div>
        <footer className='about-footer'>
             <button onClick={()=> navigate("/")}>Return to Home</button> 
             <button onClick={()=> navigate(-1)}>Go Back</button>  
             <button onClick={()=> navigate(1)}>Go Forward</button> 
          </footer>
      </>
    );
  }