import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";


function RoutingExample() {
    return (
        <div className="App">
            <h1>Routing Examples</h1>
            <Router>
                <Link to="/about">About</Link><br></br>
                <Link to="/contact">Contact-us</Link>
                <Routes>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>

        </div>
    );
}

function About() {
    return (
        <div className="App">
            <h1>About Page</h1>
        </div>
    );
}

function Contact() {
    return (
        <div className="App">
            <h1>Contact Page</h1>
        </div>
    );
}

export default RoutingExample;