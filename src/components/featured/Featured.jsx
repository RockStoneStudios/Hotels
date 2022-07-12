import React from 'react';
import useFetch from '../../hooks/useFetch';
import './featured.css';
import clienteAxios from '../../config/clientAxios';


const Featured = () => {
   const {data,loading,error}  = useFetch("/hotels/countByCity?cities=Sopetran,Santafe,Sanje")
     
   return (
    
  <div className="featured">
        { loading ? ("Loading please wait") : (
        <>
        <div className="featuredItem">
            <img
            src="https://i.ytimg.com/vi/3hp_2y3Hybc/maxresdefault.jpg"
            alt=""
            className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Sopetran</h1>
                <h2>{data[0]} properties</h2>
            </div>
         </div>
         <div className="featuredItem">
            <img
            src="https://www.cootramed.coop/userfiles/image/Convenios/hotel.jpeg"
            alt=""
            className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Santa Fe de Antioquia</h1>
                <h2>{data[1]} properties</h2>
            </div>
         </div>
         <div className="featuredItem">
            <img
            src="https://puebliandoporantioquia.com.co/listing/centro-turistico-sopetran/centro-turistico-sopetran-antioquia-_v4a1019/"
            alt=""
            className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>San Jeronimo</h1>
                <h2>{data[2]} properties</h2>
            </div>
         </div>
         </> 
        )}
    </div>
   

  )
}

export default Featured