import React from 'react'

function CardPage({ blogdata }) {
    return (
        <div>
            <div className="design-item">
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
                    <a href="#" style={{ color: "white" }} >
                        {blogdata.title}
                    </a>
                </div>
            </div>

        </div>
    )
}

export default CardPage