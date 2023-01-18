import React from 'react'
import './homePage.css'


function HomePage() {
    return (
        <div>
          <header>
<nav className='navbar'>
<div className='container'>
    <a href="HomePage.jsx" className='navbar-brand'>art design </a>
<div className='navbar-nav'>
    <a href="">home</a>
    <a href="">design</a>
    <a href="">blog</a>
    <a href="">about</a>
</div>
</div>
</nav>
<div className='banner'>
<div className='container'>
    <h1 className='banner-title'>
        <span>art.</span>design
    </h1>
    <p>everything that you want to know about art & design</p>
    <form>
        <input type="text" className='search-input' placeholder='find your food .  .  .' />
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
            <img src="https://images.pexels.com/photos/3265437/pexels-photo-3265437.jpeg?cs=srgb&dl=pexels-soo-ann-woon-3265437.jpg&fm=jpg" alt="" />
            <span><i className='far fa-heart'></i>22</span>
            <span>art $ design </span>
        </div>
        <div className='design-title'>
            <a href="#">make an  awesome  art portpolio for college  or university</a>
        </div>
    </div>
    <div className='design-item'>
        <div className='design-img'>
            <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg" alt="" />
            <span><i className='far fa-heart'></i>22</span>
            <span>art $ design </span>
        </div>
        <div className='design-title'>
            <a href="#">make an  awesome  art portpolio for college  or university</a>
        </div>
    </div>
    <div className='design-item'>
        <div className='design-img'>
            <img src="data:image/jpeg;base64,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" alt="" />
            <span><i className='far fa-heart'></i>22</span>
            <span>art $ design </span>
        </div>
        <div className='design-title'>
            <a href="#">make an  awesome  art portpolio for college  or university</a>
        </div>
    </div>
    <div className='design-item'>
        <div className='design-img'>
            <img src="https://media.istockphoto.com/id/1338011657/photo/the-word-blog-arranged-from-wooden-blocks-placed-on-a-white-computer-keyboard.jpg?b=1&s=170667a&w=0&k=20&c=MC6h9IhzFiWTFDOgeD1hsQQM5OJId6SWwVO8K7Fup-8=" alt="" />
            <span><i className='far fa-heart'></i>22</span>
            <span>art $ design </span>
        </div>
        <div className='design-title'>
            <a href="#">make an  awesome  art portpolio for college  or university</a>
        </div>
    </div>
    <div className='design-item'>
        <div className='design-img'>
            <img src="https://www.blogtyrant.com/wp-content/uploads/2020/03/free-images-for-blog.png" alt="" />
            <span><i className='far fa-heart'></i>22</span>
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