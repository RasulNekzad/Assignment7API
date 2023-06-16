import React, { useEffect,useState} from "react";
import axios from 'axios';

const OutputDisplay = (props) => {
    const [outputState, setOutputState] = useState ([])

useEffect(() =>{
    async function fetchInfo(){
        const result = await axios.get ("https://zip-api.eu/api/v1/info/US-11373") 
        console.log(result)
        //props.country_code+"-"+props.postal_code);
        setOutputState(); //returns place_name from the json
    }
    fetchInfo();
})
return(
    <div>
        <h1>The place(s) associated with that zip is </h1>
        {/* {outputState.map((query)=>{
        //query is what user entered in the form
        return <p key = {query.postal_code}>{query.place_name}</p>
    })} */}
    </div>
    );
    
};


export default OutputDisplay;