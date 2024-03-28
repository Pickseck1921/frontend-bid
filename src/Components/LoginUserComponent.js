import { useState } from "react";
import { backendURL } from "../Globals";
import { json } from "react-router-dom";

let LoginUserComponent = () =>{
    let[email, setEmail]= useState("");
    let[password, setPassword]= useState("");
    let[message, setMessage] = useState("");


    let changeEmail = (e)=>{
        setEmail(e.currentTarget.value)
    }

    
    let changePassword = (e)=>{
        setPassword(e.currentTarget.value)
    }

    let clickLoginButton = async() =>{
        let responde = await fetch(backendURL+ "/users/login", {
            method: "POST",
            headers: {"Content-Type": "appliaction/json"},
            body: JSON.stringify({
                email: email,
                password: password
            
            })
        })

        if (responde.ok){
            let jsonData = await responde.json();

            if (jsonData.apiKey != null){
                localStorage.setItem("apikey", jsonData.apiKey)
            localStorage.setItem("userid", jsonData.id)
            localStorage.setItem("email", jsonData.email)
           
            }
            
           

            setMessage ("Valid login")
        } else {
            setMessage("Not user found")

        }

    }

    return (
        <div>
            <h2>Login</h2>
            {message!= "" && <h3 className="errorMessage">{message}</h3>}
            <div className="center-box">
                <div className="from-group">
                    <input type="text" placeholder="your email" onChange={changeEmail}/>
                </div>
                <div className="from-group">
                    <input type="text" placeholder="your password" onChange={changePassword}/>
                </div>
                <button onClick={clickLoginButton}>Login</button>
            </div>
        </div>
    )
}

export default LoginUserComponent