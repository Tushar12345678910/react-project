import React,{useState,useEffect} from "react";
import './App.css';

export default function Hooks()
{
    const [count,setCount] = useState(0);
    const [remove,removeCount] = useState();
    // useEffect call when the component is created or updated any state or props
    useEffect(()=>{
        console.warn("print by useEffect hook");
    })

    // UseEffect call for a spefic condition
    useEffect( ()=>{
        alert("UseEffect call for a spefic condition")
    },[count]);

    return(
        <div className="App" style={{background:"orange"}}>
            <h1>Example of useEffect Hook: {count}</h1>
            <h1>Count Removed: {remove}</h1>
            <button onClick = {()=>setCount(count+1)}>Update Count</button>
            <button onClick = {()=>removeCount(count-1)}>Remove Count</button>
        </div>
    )
}