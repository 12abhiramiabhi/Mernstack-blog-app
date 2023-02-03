import React from "react";
import "./dorpdown.css";

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
              <a href="" className="arts">
                arts
              </a>
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
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
