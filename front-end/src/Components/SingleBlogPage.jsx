
import react from 'react'
import { useLocation } from "react-router-dom";
import "./singleblogpage.css";

function SingleBlogPage() {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="signup-container2">
      <div className="signup-card">
        <h1 className="title-head">{location.state.title}</h1>
        <p className="para9">
          {location.state.discription}
          <img className="img2" src={location.state.imgUrl} alt="" />
          categary ={location.statecategary}
        </p>

        <input className="input9" type="text" placeholder="enter name" />
        <textarea
          className="text"
          cols="10"
          rows="5"
          placeholder="commends"
        ></textarea>
        <button className="but">submit</button>
      </div>
    </div>
  );
}

export default SingleBlogPage;
