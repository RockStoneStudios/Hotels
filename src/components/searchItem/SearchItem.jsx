import React from "react";
import './searchItem.css';
import {Link} from 'react-router-dom'

const SearchItem = ({item}) => {
   console.log(item);
   return(
    <div className="searchItem">
       <img className="siImg" src={item.photos[0]} alt="" />
       <div className="siDesc">
         <h1 className="siTitle">{item.name}</h1>
         <span className="siDistance">{item.distance}mts  from center</span>
         <span className="siTaxiOp">Free airport taxi</span>
         <span className="siSubtitle">
            Studio Apartament with Air conditioning
         </span>
         <span className="siFeatures">
          {item.desc}
         </span>
         <span className="siCancelOp">Free cancellation</span>
         <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today</span>
       </div>
       <div className="siDetails">
        {<div className="siRating">
         item.rating && 
            <span>Excellent</span>
            <button>{item.rating}</button>
        </div>
       }
         <div className="siDetailText">
            <span className="siPrice">${item.cheapestPrice}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/hotels/${item._id}`}>
              <button className="siCheckButton">See availability</button>
            </Link>
         </div>
       </div>
    
    </div>
   )
}


export default SearchItem;
