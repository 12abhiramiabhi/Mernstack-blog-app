import React from 'react'
import './signup.css'


function SignupPage() {
    return (
        <div className='signup-container2'>
            <div className='signup-card'>
                <h1 className='signup-head'> signup</h1><br />
                <input type="text" placeholder='name' className='input12' /><br />
                <input type="password" placeholder='password' className=' input1' /><br />
                <input type="text" placeholder='enter email' className='input2' /><br />
                <input type="text" placeholder=' phone number' className='input3' /><br />
                <button className='signup-button'>signup</button>
            </div>
        </div>
    )
}
export default SignupPage