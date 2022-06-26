import React from 'react'
import './propertyList.css';


const PropertyList = () => {
  return (
   <>
    <div className="pList">
        <div className="pListItem">
            <img  className='pListImg' src="https://elgaitero.com.co/wp-content/uploads/2021/09/13.jpg" alt="" />
            <div className="pListTitles">
                <h1>Gaitero</h1>
                <h2>23 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src="https://elgaitero.com.co/wp-content/uploads/2021/09/13.jpg" alt="" />
            <div className="pListTitles">
                <h1>Bonaire</h1>
                <h2> hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src="https://elgaitero.com.co/wp-content/uploads/2021/09/13.jpg" alt="" />
            <div className="pListTitles">
                <h1>Bonaire</h1>
                <h2> hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src="https://elgaitero.com.co/wp-content/uploads/2021/09/13.jpg" alt="" />
            <div className="pListTitles">
                <h1>Bonaire</h1>
                <h2> hotels</h2>
            </div>
        </div>
    </div>
   </>
  )
}

export default PropertyList