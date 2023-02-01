import React from "react";
import { useNavigate } from "react-router-dom";

function CardPage({ blogdata }) {
  const navigate = useNavigate();

  async function cardBtn() {
    navigate("/SingleBlogPage", { state: blogdata });
  }

  return (
    <div className="design-item" onClick={cardBtn}>
      <div className="design-img">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/658/185/126/squirt-art-guy-wallpaper-preview.jpg"
          alt=""
        />
        <span>
          <i className="far fa-heart"></i>like 22
        </span>
        <span>art $ design </span>
      </div>
      <div className="design-title">
        <a href="#" style={{ color: "white" }}>
          {blogdata.title}
        </a>
        <button onClick={cardBtn}>submit</button>
      </div>
    </div>
  );
}

export default CardPage;
