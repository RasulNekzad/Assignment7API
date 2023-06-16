import React, { useEffect,useState} from "react";
import axios from 'axios';

const OutputDisplay = (props) => {
    const [outputState, setOutputState] = useState ([])
const [input,setInput] = useState ("") 


    async function fetchInfo(){
        const result = await axios.get(`https://zip-api.eu/api/v1/info/US-${input}`) 
        console.log(result)
        setOutputState(result.data); 
        
    }
return(
    
    <div>

       <input type="text" onChange={e=>{setInput(e.target.value)}}/> 
       <button onClick = {fetchInfo}> Submit </button> 
        <h1>The place(s) in the US associated with that zip is </h1>
        <p>State: {outputState.state}</p>
        <p>City: {outputState.place_name}</p>
        <p>Latitude: {outputState.lat}</p>
        <p>Longitude: {outputState.lng}</p>

        
    </div>
    );
    
};


export default OutputDisplay;