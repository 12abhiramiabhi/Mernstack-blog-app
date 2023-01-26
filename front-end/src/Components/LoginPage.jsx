import React from 'react'
import axios from 'axios'
import './signup.css'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'



function LoginPage() {

    const userEmailRef = useRef()
    const userPasswordRef = useRef()

    const navigate = useNavigate()

    async function loginButton() {
        let obj = {
            password: userPasswordRef.current.value , email: userEmailRef.current.value
        }
        console.log(userEmailRef.current.value);
        console.log(userPasswordRef.current.value);
        let response = await axios.post("http://localhost:5000/loginPage", obj)
        console.log(response);
        if (response.data.sucess) {
            alert("suessfully added")
            navigate("/HomePage")


        } else alert("validation error")
    }

    return (
        <div className='signup-container2'>
            <div className='signup-card'>
                <h1 className='signup-head'>Login</h1><br />

                <input type="password" placeholder='password' ref={userPasswordRef} className=' input1' /><br />
                <input type="text" placeholder='email' ref={userEmailRef} className='input2' /><br />

                <button className='signup-button' onClick={loginButton}>login</button>
            </div>
        </div>
    )
}
export default LoginPage