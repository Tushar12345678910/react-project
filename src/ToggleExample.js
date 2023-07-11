import React, { useState } from "react"
import './App.css';
function ToggleExample() {
    const [status, setStatus] = React.useState(true);
    return (
        <div className="App" style={{backgroundColor: "yellow"}}>
            <h1>Hide/Show Name on the button click</h1>
            {
                status ? <h1>Name</h1> : ''
            }
            <button onClick={() => setStatus(false)}>Hide</button>
            <button onClick={() => setStatus(true)}>Show</button>
            <button onClick={() => setStatus(!status)}>Toggle</button>
        </div>

    )
}

export default ToggleExample;