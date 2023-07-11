import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import User from './User'


function DynamicRouting() {
    let users = [
        { id: 1, name: "tushar", email: "tg@a.com" },
        { id: 2, name: "yash", email: "y@p.com" },
        { id: 3, name: "suyash", email: "s@d.com" }
    ];
    return (
        <div className='App'>
            <h1>User's List</h1>
            <Router>
                {
                    users.map((item) =>
                        <div><Link to={"/user/" + item.id + "/" + item.name}>{item.name}</Link></div>
                    )
                }
                <Routes>
                    <Route path="/user/:id/:name" element={<User />}/>
                </Routes>
            </Router>



        </div>
    )
}

export default DynamicRouting;