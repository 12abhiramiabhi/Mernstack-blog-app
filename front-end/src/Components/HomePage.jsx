import "./homePage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import CardPage from "./CardPage";
import { useState } from "react";

function HomePage() {
  const [allblog, setallblogs] = useState()
  const getAllBlog = async () => {
    let response = await axios.get("http://localhost:5000/getBlog");
    console.log(response);
    if (response.data.sucess) {
      setallblogs(response.data.getBlog)
    }
  };


  const navigate = useNavigate();

  useEffect(() => {
    getAllBlog();
  }, []);

  async function blogButton2() {
    navigate("/blogaddedPage");
  }

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="container">
            <a href="HomePage.jsx" className="navbar-brand">
              Art design
            </a>
            <div className="navbar-nav">
              <a href="">home</a>
              <a href="" onClick={blogButton2}>
                blog
              </a>
              <a href="">about</a>
              <a href="">contact</a>
              <a href="">Signup</a>
              <a href="">Login</a>
            </div>
          </div>
        </nav>
        <div className="banner">
          <div className="container">
            <h1 className="banner-title">
              <span>art.</span>design blog
            </h1>
            <p>everything that you want to know about art & design</p>
            <form>
              <input
                type="text"
                className="search-input"
                placeholder="search ..."
              />
              <button type="submit" className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </header>

      <section className="design" id="design">
        <div className="container">
          <div className="title">
            <h2>recent arts & designs</h2>
            <p>recent arts & designs on the blog</p>
          </div>

          <div className="design-content">
            {
              allblog && allblog.map((blogdata) => {
                return <CardPage blogdata={blogdata} />

              })
            }

          </div>
        </div>
      </section>
    </div>
  );
}
export default HomePage;
