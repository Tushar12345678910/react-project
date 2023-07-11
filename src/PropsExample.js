import React,{useState} from "react";
import './App.css';
function PropsExample(props)
{
    const[age,increaseAge] = useState(24);
    return(
        <div className="App" style={{backgroundColor: "lightblue"}}>
            <h1>Hello: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Address: {props.others.address}</h1>
            <h1>Age: {age}</h1>
            <button onClick={()=>{increaseAge(age+1)}}>Update Age</button>
        </div>
    )
}

export default PropsExample;