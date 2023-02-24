import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "./edit.css"


function EditPage() {

    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state);

    const [title, setTitle] = useState("")
    const [discription, setDiscrition] = useState("")
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")
    const [categary, setCategoery] = useState("")

    async function btnedit(e) {
        e.preventDefault()
        let obj = { title, discription, image, date, categary }
        console.log(obj)

        let response = await axios.post(`http://localhost:5000/update-blog/${location.state._id}`, obj)
        console.log(response)
        if (response.data.sucess) {
            alert("Blog Editing Sucussfully Completed")
            navigate("/homePage")
        } else {
            alert("validation error")
        }
    }


    useEffect(() => {
        setTitle(location.state.title)
        setDiscrition(location.state.discription)
        setImage(location.state.imgUrl)
        setDate(location.state.date)
        setCategoery(location.state.categary)
    }, [])


    return (
        <div>
            <div className="center">
                <div className="editing">
                    <h1 className='head-title' >Edit Your Blog</h1>
                    <div id='frm1' >
                        <div className='txt' >
                            <label >Title</label>
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} required className='input' />
                        </div>
                        <div className="editing1">
                            <label htmlFor="">Discription</label>
                            <input type="text" value={discription} onChange={(e) => { setDiscrition(e.target.value) }} required className='input2' />

                        </div>
                        <div className="editing2">
                            <label htmlFor="">Image</label>
                            <input type="text" value={image} onChange={(e) => { setImage(e.target.value) }} />
                        </div>
                        <div className="editing3">
                            <input type="date" value={date} onChange={(e) => { setDate(e.target.value) }} required className='input3' />


                        </div>
                        <div className="custom-select"  >

                            <select className='select-div' value={categary} onChange={(e) => { setCategoery(e.target.value) }}>

                                <option value="0">Categary</option>

                                <option value="Arts">Arts</option>
                                <option value="Sports">Sports</option>
                                <option value="Tech">Tech</option>
                                <option value="science">Science</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <button className='btn-for-sub' type='button' onClick={(e) => { btnedit(e) }} >SUBMIT</button>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default EditPage;