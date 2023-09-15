import axios from "axios";
import React, { useState } from "react";

export default function Create() {
    const [name, setName] = useState('')

    const postData = () => {
        axios.post(`http://127.0.0.1:8080/todo`, { name })
            .then((response) => {
                console.log(response);
            })
    }

    return (
        <div>
            <h1>Create</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                postData();
            }}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={(e) => { setName(e.target.value)}} />

                <button type="submit" >Submit</button>
            </form>
        </div>
    );

    
}


