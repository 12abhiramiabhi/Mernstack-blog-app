import react from "react";
import { useLocation } from "react-router-dom";
import "./singleblogpage.css";
import axios from "axios";
import { useRef } from "react";

function SingleBlogPage() {
  const location = useLocation();
  console.log(location.state);

  const userNameRef = useRef();
  const CommendTextRef = useRef();

  async function BlogBtnSubmit() {
    let obj = {
      userName: userNameRef.current.value,
      CommendText: CommendTextRef.current.value,
    };
    console.log(obj);
    let response = await axios.post(
      `http://localhost:5000/addcommnd/${location.state._id}`,
      obj
    );
    console.log(response);
    return (
      <div>
        <div className="single-card">
          <div className="single-box">
            <h1 className="title-head">{location.state.title}</h1>
            <p className="para-lorem">
              {location.state.discription}
              <img className="image" src={location.state.imgUrl} alt="" />
            </p>
            <div className="cat">categary ={location.statecategary}</div>

            <div className="cmnt-lists">
              <div className="cmntcardz">
                <h1 className="addyour">Add Your Comments</h1>
                <input
                  type="text"
                  placeholder="Name"
                  className="cmntname"
                  ref={username}
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
                <button className="cmnt-btn" onClick={BlogBtnSubmit}>
                  Submit
                </button>
              </div>
            </div>

            <div className="viewcmnt">
              <div className="cmnt_read">
                <h3 className="user-name">abhi</h3>
                <p className="cmnt-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid quibusdam, ratione saepe commodi laudantium nam quae
                  reiciendis impedit eius optio consequuntur aperiam cum
                  excepturi fugit pariatur voluptates incidunt provident
                  blanditiis?
                </p>
                <button className="view-cmnt">View New Comments</button>
              </div>
            </div>
            <div className="viewcmnt">
              <div className="cmnt_read">
                <h3 className="user-name">Poornima</h3>
                <p className="cmnt-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid quibusdam, ratione saepe commodi laudantium nam quae
                  reiciendis impedit eius optio consequuntur aperiam cum
                  excepturi fugit pariatur voluptates incidunt provident
                  blanditiis?
                </p>
                <button className="view-cmnt">View New Comments</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBlogPage;
