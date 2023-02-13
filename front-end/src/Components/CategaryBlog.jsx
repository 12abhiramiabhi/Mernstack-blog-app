import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./categaryblog.css";
import CategarySingleCard from "./CategarySingleCard";
import { useParams } from "react-router-dom";
import axios from "axios";

function CategaryBlog() {
  const [cateblog, setAllblogs] = useState();
  const { categary } = useParams();
  console.log(categary);

  async function cateBlog() {
    let response = await axios.get(
      `http://localhost:5000/blog-by-categary/${categary}`
    );
    console.log(response);
    if (response.data.sucess) {
      setAllblogs(response.data.getBlog);
    }
  }
  useEffect(() => {
    cateBlog();
  }, []);

  return (
    <div>
      <div>
        <ul className="drop">
          <li>
            <Link to="/CategaryBlog"> arts</Link>
          </li>
          <li>
            <a href="" className="arts">
              sports
            </a>
          </li>
          <li>
            <a href="" className="arts">
              science
            </a>
          </li>
          <li>
            <a href="" className="arts">
              tech
            </a>
          </li>
        </ul>
      </div>

      <div className="card-banner">
        {cateblog &&
          cateblog.map((blog) => {
            return <CategarySingleCard blogcate={blog} />;
          })}
      </div>
    </div>
  );
}

export default CategaryBlog;
