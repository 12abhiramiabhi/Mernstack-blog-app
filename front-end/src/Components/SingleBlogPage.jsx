import axios from "axios"
import React, { useEffect, useRef, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import "./singleblogpage.css"
import { useNavigate } from 'react-router-dom'
import CmntCard from './CmntCard'

function SingleBlogPage() {

  const [cmntBlog, setCmntBlog] = useState([])
  const navigate = useNavigate()

  const location = useLocation();
  console.log(location.state);

  const userNameRef = useRef();
  const CommendTextRef = useRef();

  // async function BlogBtnSubmit() {
  //   let obj = {
  //     userName: userNameRef.current.value,
  //     CommendText: CommendTextRef.current.value,
  //   };
  //   console.log(obj);
  //   let response = await axios.post(
  //     `http://localhost:5000/addcommnd/${location.state._id}`, obj)
  //   console.log(response)
  //   if (response.data.sucess) {
  //     userNameRef.current.value = ""
  //     CommendTextRef.current.value = ""
  //     alert("comment add sucessfully")
  //   } else {
  //     alert("validation error")
  //   }
  // }

  async function editBlog() {
    navigate("/editblog", { state: location.state })
  }

  async function cmntPage() {
    let response = await axios.get(`localhost:5000/update-blog/${location.state._id}`)
    console.log(response)
    if (response.data.sucess) {
      setCmntBlog(response.data.allCmnts)
    }
  }
  useEffect(() => {
    cmntPage()
  }, [])


  return (
    <div>
      <div className="single-card">
        <div className="single-box">
          <h1 className="title-head">{location.state.title}</h1>
          <p className="para-lorem">
            {location.state.discription}
            <img className="image" src={location.state.imgUrl} alt="" />
          </p>
          <div className="cat">categary ={location.state.categary}</div>
          <button className='editBlog' onClick={editBlog} >Edit Your Blog</button>

          <div className="cmnt-lists">
            <div className="cmntcardz">
              <h1 className="addyour">Add Your Comments</h1>
              <input
                type="text"
                placeholder="Name"
                className="cmntname"
                ref={userNameRef}
              />
              <textarea
                name=""
                placeholder="Enter Your Comments"
                ref={CommendTextRef}
                className="textarea"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button className="cmnt-btn" >
                Submit
              </button>
            </div>
          </div>

          {
            cmntBlog && cmntBlog.map((a) => {
              return <CmntCard blogCmntss={a} />
            })
          }

        </div>
      </div>
    </div>
  );

}

export default SingleBlogPage;
