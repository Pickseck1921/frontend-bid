import { useState } from "react";
import { backendURL } from "../Globals";



let CreateUserComponent = () => {
    let[email, setEmail]= useState("");
    let[password, setPassword]= useState("");
    let[message, setMessage] = useState("");


    let changeEmail = (e)=>{
        setEmail(e.currentTarget.value)
    }

    
    let changePassword = (e)=>{
        setPassword(e.currentTarget.value)
    }

    let clickCreate = async() =>{
        let responde = await fetch(backendURL+ "/users", {
            method: "POST",
            headers: {"Content-Type": "appliaction/json"},
            body: JSON.stringify({
                email: email,
                password: password
            
            })
        })

        if (responde.ok){
            let jsonData = await responde.json();
            setMessage ("New User Created")
        } else {
            setMessage("Error")

        }

    }

    return (
        <div>
            <h2>Register User</h2>
            <h3>{message}</h3>
            <div className="center-box">
                <div className="from-group">
                    <input type="text" placeholder="your email" onChange={changeEmail}/>
                </div>
                <div className="from-group">
                    <input type="text" placeholder="your password" onChange={changePassword}/>
                </div>
                <button onClick={clickCreate}>Create Account</button>
            </div>
        </div>
    )
}


export default CreateUserComponent; 