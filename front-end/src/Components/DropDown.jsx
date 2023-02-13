import React from "react";
import "./dorpdown.css";
import { Link } from "react-router-dom";

function DropDown() {
  return (
    <div>
      <ul className="dropss">
        <li>
          <a href="" className="cat">
            categary
          </a>
          <ul className="drop">
            <li>
              <Link to="/CategaryBlog/arts">arts</Link>
            </li>
            <li>
              <Link to="/CategaryBlog/sports">sports</Link>
            </li>
            <li>
              <Link to="/CategaryBlog/science">science</Link>
            </li>
            <li>
              <Link to="/CategaryBlog/tech">tech</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
