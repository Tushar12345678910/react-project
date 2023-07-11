import React,{useState} from "react";
import './App.css';
import Form from "./Form";

function GetInputFieldData()
{
    const[data,setData] = useState();
    function getData(val)
    {
        setData(val.target.value);
    }
    return(
        <div className="App" style={{backgroundColor: "lightgreen"}}>
            <h1>Get Input Field Data By Onchange Event: {data}</h1>
            <input type="text" onChange={getData}/>
            <Form/><br></br>
        </div>
    );
}

export default GetInputFieldData;