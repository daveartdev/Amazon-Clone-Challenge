import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img 
            className='home__image'
            src="https://m.media-amazon.com/images/I/61j0TduptpL._SX3000_.jpg" alt="Background" />

            <div className="home__row">
                <Product 
                 id=""
                 title='The Lean Startup' 
                 price={29.99} 
                 image={"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019._UY630_SR1200,630_.jpg"}
                 rating={6}
                />        
                <Product 
                 id="4903850"
                 title="Samsung CF390 27 16:9 Curved LCD FHD 1920x1080 Curved Desktop Black Monitor for Multimedia, Personal, Business, HDMI, VGA, VESA Mountable, Eye Saver Mode & Flicker Free Technology (LC27F390FH)" 
                 price={229.99} 
                 image={"https://m.media-amazon.com/images/I/51dgZa9Uo2L._AC_.jpg"}
                 rating={6}
                />
            </div>

            <div className="home__row">
                <Product 
                 id="23445930"
                 title='Echo Show 5 (2nd Gen, 2021 release) | Smart display with Alexa and 2 MP camera | Charcoal' 
                 price={49.99} 
                 image={"https://m.media-amazon.com/images/I/51iobpaEM5S._AC_UY218_.jpg"}
                 rating={6}
                 />
                <Product 
                 id=""
                 title='STAR WARS: Obi-wan: Darth Vader Moving Arm Hard Enamel Pin (Amazon Exclusive)' 
                 price={14.99} 
                 image={"https://m.media-amazon.com/images/I/71VV8wSLbzL._AC_SX679_.jpg"}
                 rating={3}
                 />
                <Product 
                 id=""
                 title="Hanes Men's Essentials Short Sleeve T-shirt Value Pack (4-pack)" 
                 price={15.99} 
                 image={"https://m.media-amazon.com/images/I/61vICa-RObL._AC_UX569_.jpg"}
                 rating={4}
                 />
            </div>

            <div className="home__row">
                <Product 
                 id=""
                 title="adidas Men's Adilette Shower Slide " 
                 price={29.99} 
                 image={"https://m.media-amazon.com/images/I/51bSvh09-aL._AC_UX575_.jpg"}
                 rating={5}
                 />
            </div>
        </div>
    </div>
  )
}

export default Home


