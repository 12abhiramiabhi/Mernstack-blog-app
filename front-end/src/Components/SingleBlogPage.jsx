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
        </p>
        <div className="cat">
          categary ={location.statecategary}
          </div>

          <div className="cmnt-list">
            <div className="cmnt-card">
              <h1 className="addcmnt">add your comments</h1>
        <input className="cmntname" type="text" placeholder="enter name"/>
        <textarea
          className="textarea"
          cols="10"
          rows="5"
          placeholder="commends"
        ></textarea>
        <button className="cmnt-btn">submit</button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default SingleBlogPage;
