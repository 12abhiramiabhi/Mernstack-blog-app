import React from "react";
import { Link } from "react-router-dom";
import './categaryblog.css'

function CategaryBlog() {
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
            arts
          </a>
        </li>
      </ul>
    </div>
    <div className="container-cate">
      <div className="cate-card">
        <h1 className="cat-head">categaryblog</h1>
        <p className="para8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ratione doloremque dolorem ab deserunt quod impedit, in adipisci, suscipit asperiores sed. Reiciendis consectetur accusantium repellendus
          
        </p>
      </div>

    </div>
</div>  
  );
}

export default CategaryBlog;
