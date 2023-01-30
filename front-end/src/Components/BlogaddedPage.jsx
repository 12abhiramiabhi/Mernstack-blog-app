import axios from "axios";
import React from "react";
import "./blogPage.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function BlogaddedPage() {
  const userTitleRef = useRef();
  const userDiscriptionRef = useRef();
  const userDateRef = useRef();
  const navigate = useNavigate();

  async function blogButton() {
    let obj = {
      title: userTitleRef.current.value,
      discription: userDiscriptionRef.current.value,
      date: userDateRef.current.value,
    };
    console.log(userTitleRef.current.value);
    console.log(userDiscriptionRef.current.value);
    console.log(userDateRef.current.value);

    let response = await axios.post("http://localhost:5000/Blogadded", obj);
    console.log(response);
    if (response.data.sucess) {
      alert(" blog added");
      navigate("/homePage");
    } else {
      alert("validation errorr");
    }
  }

  return (
    <div>
      <div className="blog-container2">
        <div className="blog-card">
          <h1 className="signup-head"> blog adding page</h1>
          <br />

          <input
            type="text"
            name="title"
            placeholder="title"
            ref={userTitleRef}
            className="blog-input"
          />
          <br />
          <textarea
            name="discription"
            ref={userDiscriptionRef}
            id=""
            cols=""
            rows=""
            className="text-area1"
            placeholder="add your blog"
          ></textarea>
          {/* <input  placeholder='add your blog' className='blog-1' /><br /> */}
          <input
            type="type"
            name="date"
            placeholder="created at"
            ref={userDateRef}
            className="blog-2"
          />
          <br />

          <button className="blog-button" onClick={blogButton}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogaddedPage;
