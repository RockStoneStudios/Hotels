import React from 'react'
import './featured.css';
const Featured = () => {
  return (
    <>
  <div className="featured">
         <div className="featuredItem">
            <img
            src="https://i.ytimg.com/vi/3hp_2y3Hybc/maxresdefault.jpg"
            alt=""
            className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Sopetran</h1>
                <h2>123 properties</h2>
            </div>
         </div>
         <div className="featuredItem">
            <img
            src="https://www.cootramed.coop/userfiles/image/Convenios/hotel.jpeg"
            alt=""
            className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Bonaire</h1>
                <h2>127 properties</h2>
            </div>
         </div>
         <div className="featuredItem">
            <img
            src="https://puebliandoporantioquia.com.co/listing/centro-turistico-sopetran/centro-turistico-sopetran-antioquia-_v4a1019/"
            alt=""
            className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>ArcoIris</h1>
                <h2>127 properties</h2>
            </div>
         </div>
    </div>
</>
  )
}

export default Featured