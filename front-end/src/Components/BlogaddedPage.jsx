import axios from 'axios'
import React from 'react'
import './blogPage.css'

function BlogaddedPage() {

    async function blogButton(){
        let response = await axios.post("http://localhost:5000/blogAdding")
        console.log( response );
        alert(" blog added")
    }

    return (
        <div>

            <div className='blog-container2'>
                <div className='blog-card'>
                    <h1 className='signup-head'> blog adding page</h1><br />

                    <input type="text" placeholder='title' className='blog-input' /><br />
                    <textarea name="" id="" cols="" rows="" className='text-area1' placeholder='add your blog'></textarea>
                    {/* <input  placeholder='add your blog' className='blog-1' /><br /> */}
                    <input type="type" placeholder='created at' className='blog-2' /><br />

                    <button className='blog-button' onClick={blogButton} >submit</button>
                </div>
            </div>
        </div>
    )
}

export default BlogaddedPage
