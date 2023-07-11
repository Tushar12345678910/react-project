import { useState } from "react";
import './App.css';


function StateExample()
{
    const[name,changeName] = useState("Tushar");
    function updateName()
    {
        changeName("Name changed");
    }

    return(
        <div className="App">
            <h1>Example of state  {name}</h1>
            <button onClick={updateName}>Update Name</button>
            <br></br>
        </div>
    )
}

export default StateExample;