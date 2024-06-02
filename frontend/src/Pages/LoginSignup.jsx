import React, { useState } from "react";
import './CSS/LoginSignup.css'

const LoginSignup =()=>{

    const [state,setState] = useState("Login");
    const [formData,setFormData] = useState({
        username:"",
        email:"",
        password:""
    })

    const changeHandler = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

//login and signup api pass
const login = async () =>{
    console.log("Login fun executed",formData);

    let responseData;
    await fetch('http://localhost:4000/login',{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
    }).then((res)=>res.json()).then((data)=>responseData=data)

    if(responseData.success)
    {
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
    }
    else{
        alert(responseData.errors);
    }

   
}
const signup = async () =>{
    console.log("singup fun executed",formData);

    let responseData;
    await fetch('http://localhost:4000/signup',{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
    }).then((res)=>res.json()).then((data)=>responseData=data)

    if(responseData.success)
    {
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
    }
    else{
        alert(responseData.errors);
    }
}



    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Sign Up"?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />:<></>}
                    <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Your Email" />
                    <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
                </div>

                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                {/* adding feature of login and sing up acc  */}
                {state==="Sign Up"?
                <p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>:                
                <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}

                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" required/>
                    <p>By continuing, i agree to the terms of use & privacy policy. </p>
                </div>
                {/* <p className="loginsignup-login"><span onClick={()=>{setState("Login")}} style={{fontSize: '15px', color:"#252525"}}>Admin Login</span></p>              */}

            </div>
        </div>
    )
}

export default LoginSignup