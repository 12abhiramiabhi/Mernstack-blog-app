import React from 'react'
import './homePage.css'
import { useNavigate } from 'react-router-dom'

function HomePage() {

    const navigate = useNavigate()

    async function blogButton2(){
        navigate("/blogaddedPage")
    }

    return (
        <div>
            <header>
                <nav className='navbar'>
                    <div className='container'>
                        <a href="HomePage.jsx" className='navbar-brand'>Art design</a>
                        <div className='navbar-nav'>
                            <a href="">home</a>
                            <a href="" onClick={blogButton2}>blog</a>
                            <a href="">about</a>
                            <a href="">contact</a>
                            <a href="">Signup</a>
                            <a href="">Login</a>
                        </div>
                    </div>
                </nav>
                <div className='banner'>
                    <div className='container'>
                        <h1 className='banner-title'>
                            <span>art.</span>design blog
                        </h1>
                        <p>everything that you want to know about art & design</p>
                        <form>
                            <input type="text" className='search-input' placeholder='search ...' />
                            <button type='submit' className='search-btn'>
                                <i className='fas fa-search'></i>
                            </button>
                        </form>
                    </div>
                </div>
            </header>


            <section className='design' id='design'>
                <div className='container'>
                    <div className='title'>
                        <h2>recent arts & designs</h2>
                        <p>recent arts & designs on the blog</p>
                    </div>

                    <div className='design-content'>

                        <div className='design-item'>
                            <div className='design-img'>
                                <img src="https://media.istockphoto.com/id/1132442970/photo/colored-powder-explosion-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=9f6Nc2aWd_D8tQRvA3smOJxuG8P9YBTbSx3At4OEqyk=" alt="" />
                                <span><i className='far fa-heart'></i>like 22</span>
                                <span>art $ design </span>
                            </div>
                            <div className='design-title'>
                                <a href="#">make an  awesome  art portpolio for college  or university</a>
                            </div>
                        </div>
                        <div className='design-item'>
                            <div className='design-img'>
                                <img src="https://c4.wallpaperflare.com/wallpaper/658/185/126/squirt-art-guy-wallpaper-preview.jpg" alt="" />
                                <span><i className='far fa-heart'></i>like 22</span>
                                <span>art $ design </span>
                            </div>
                            <div className='design-title'>
                                <a href="#">make an  awesome  art portpolio for college  or university</a>
                            </div>
                        </div>
                        <div className='design-item'>
                            <div className='design-img'>
                                <img src="https://c4.wallpaperflare.com/wallpaper/658/185/126/squirt-art-guy-wallpaper-preview.jpg" alt="" />
                                <span><i className='far fa-heart'></i>like 22</span>
                                <span>art $ design </span>
                            </div>
                            <div className='design-title'>
                                <a href="#">make an  awesome  art portpolio for college  or university</a>
                            </div>
                        </div>
                        <div className='design-item'>
                            <div className='design-img'>
                                <img src="https://media.istockphoto.com/id/1132442970/photo/colored-powder-explosion-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=9f6Nc2aWd_D8tQRvA3smOJxuG8P9YBTbSx3At4OEqyk=" alt="" />
                                <span><i className='far fa-heart'></i>like 22</span>
                                <span>art $ design </span>
                            </div>
                            <div className='design-title'>
                                <a href="#">make an  awesome  art portpolio for college  or university</a>
                            </div>
                        </div>
                        <div className='design-item'>
                            <div className='design-img'>
                                <img src="https://media.istockphoto.com/id/1134512518/photo/abstract-hand-painted-art-background-on-canvas.jpg?b=1&s=612x612&w=0&k=20&c=UfkeC1cZHV-jAB1pUEg5zdr_0wMv32eZWDbPTQn6748=" alt="" />
                                <span><i className='far fa-heart'></i>like 22</span>
                                <span>art $ design </span>
                            </div>
                            <div className='design-title'>
                                <a href="#">make an  awesome  art portpolio for college  or university</a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </div>


    )
}
export default HomePage