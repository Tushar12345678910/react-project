import React,{useState} from "react";
import './App'
export default function IfElse()
{
    const[user,setUser] = useState("1");
    return(
        <div className="App" style={{background:"gray"}}>
        <h1>Condition Statements:</h1>
        <lable>Enter User Id: </lable>
        <input type="text" onChange={(e)=>setUser(e.target.value)}/>
        {user==1?<h1>Welcome User 1</h1>
        :user==2?<h1>Welcome User 2</h1>
        :<h1>Welcome User 3</h1>
        }   
        </div>
    )
}