import React from 'react'
import './signup.css'


function LoginPage() {
    return (
        <div className='signup-container2'>
            <div className='signup-card'>
                <h1 className='signup-head'>Login</h1><br />
                <input type="text" placeholder='name' className='input12' /><br />
                <input type="password" placeholder='password' className=' input1' /><br />
                <input type="text" placeholder='email' className='input2' /><br />
                <input type="text" placeholder=' phone number' className='input3' /><br />
                <button className='signup-button'>login</button>
            </div>
        </div>
    )
}
export default LoginPage