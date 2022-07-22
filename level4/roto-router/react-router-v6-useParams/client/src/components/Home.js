import React from 'react' //Step 1
import {useNavigate} from 'react-router-dom'; //Step 2 NAV - Step 2

export default function Home() { //Step 2
  const navigate = useNavigate() // NAV Step 1 
  
  return (//Step 3
      
      <div style={{ padding: 20 }}> {/*Step 4*/}
        
          <h2>Home Page</h2>{/*Step 5*/}
        { <p>Lorem ipsum dolor sit amet, consectetur adip.</p> } {/*Step 6*/}
        <button onClick={()=> navigate("/Services")}>Go to Services page</button> {/*NAV - Step 3*/}
        <button onClick={()=> navigate(-1)}>Go Back </button> {/*NAV - Step 4*/}
      </div> //Step 4
    );// Step 3
  }// Step 2