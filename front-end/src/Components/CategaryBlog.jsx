import React from "react";
import { Link } from "react-router-dom";

function CategaryBlog() {
  return (
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
            arts
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CategaryBlog;
