import React from 'react'
import { useRef } from 'react'
import './signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function SignupPage() {

    const userNameRef = useRef()//input te value adukkan ref//
    const userEmailRef = useRef()
    const userPasswordRef = useRef()
    const userPhoneRef = useRef()

    const navigate = useNavigate()

    async function signupButton() {
        let obj = {
            name: userNameRef.current.value, email: userEmailRef.current.value, password: userPasswordRef.current.value,
            phonenumber: userPhoneRef.current.value
        }
        // alert("sueccfully add")
        console.log(userNameRef.current.value);
        console.log(userEmailRef.current.value);
        console.log(userPasswordRef.current.value);
        console.log(userPhoneRef.current.value);
        let response = await axios.post("http://localhost:5000/userSignup", obj)
        console.log(response);
        if (response.data.sucess) {
            alert("suessfully added")
            navigate("/LoginPage")
        } else alert("validation error")

    }



    return (
        <div className='signup-container2'>
            <div className='signup-card'>
                <h1 className='signup-head'> Signup</h1><br />

                <input type="text" placeholder='name' className='input12' ref={userNameRef} /><br />
                <input type="password" placeholder='password' ref={userPasswordRef} className=' input1' /><br />
                <input type="text" placeholder='email' ref={userEmailRef} className='input2' /><br />
                <input type="text" placeholder=' phone number' ref={userPhoneRef} className='input3' /><br />
                <button className='signup-button' onClick={signupButton}>signup</button>
            </div>
        </div>
    )
}
export default SignupPage