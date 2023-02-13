import React from "react";

function CategarySingleCard({ blogcate }) {
  return (
    <div>
      <div className="container-cate">
        <div className="cate-card">
          <h1 className="cat-head">{blogcate.title}</h1>
          <p className="para8">
            {blogcate.discription}
            <img
              className="img7"
              src="https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg"
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategarySingleCard;
