import React, { useEffect,useState} from "react";
import axios from 'axios';

const OutputDisplay = (props) => {
    const [outputState, setOutputState] = useState ([])
const [input,setInput] = useState ("") 


    async function fetchInfo(){
        const result = await axios.get(`https://zip-api.eu/api/v1/info/US-${input}`) 
        console.log(result)
        //props.country_code+"-"+props.postal_code);
        setOutputState(); //returns place_name from the json
    }

    

const handleSubmit = (e)=>{
    //prevents page from refreshing
    //e.preventDefault();
    console.log(e.target.value)
};
console.log(input)

return(
    
    <div>
         {/* <form> */}
       <input type="text" onChange={e=>{setInput(e.target.value)}}/> 
       <button onClick = {fetchInfo}> Submit </button> 
    {/* </form> */}
        <h1>The place(s) in the US associated with that zip is </h1>
        {/* {outputState.map((query)=>{
        //query is what user entered in the form
        return <p key = {query.postal_code}>{query.place_name}</p>
    })} */}
    </div>
    );
    
};


export default OutputDisplay;