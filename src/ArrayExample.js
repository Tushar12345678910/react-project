import React from "react";
import './App.css';

export default function ArrayExample() {
    const data = [
        { name: "Tushar", email: "tg@gmail.com", phone: "111" },
        { name: "Suryansh", email: "tg@gmail.com", phone: "222" },
        { name: "Yash", email: "yash@gmail.com", phone: "333" }
    ];

    return (
        <div className="App" style={{ background: "#61dafb" }}>
            <h1>Iterarting Array using map function & show in table</h1>
            <table align="center" border={1}>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {
                    data.map((items) =>
                        <tr>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>{items.phone}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    )
}