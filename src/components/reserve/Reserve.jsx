import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { SearchContext } from '../../context/SearchContext'
import useFetch from '../../hooks/useFetch'
import "./reserve.css"

export const Reserve = ({setOpen,hotelId}) => {
    const {data,loading,error} = useFetch(`/hotels/room/${hotelId}`);
    const [selectedRooms,setSelectedRooms] = useState([]);
    const {dates} = useContext(SearchContext);
    const handleSelect = e => {
        const selected = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(checked ? [...selectedRooms,value]: selectedRooms.filter(item => item !== value))
    }

    const getDatesInRange = (startDate,endDate)=> {
         const start = new Date(startDate);
         const end = new Date(endDate);
        const date = new Date(start.getTime());
        let list = [];
        while(data<= end) {
            list.push(new Date(date));
            date.setDate(date.getDate()+1);
        }
        return list;
    }
    const handleClick = () => {

    }
  return (
    <div className='reserve'>
        <div className="rContainer">
            <FontAwesomeIcon 
            icon={faCircleXmark}
            className = "rClose"
            onClick={()=> setOpen(false)}
            />
            <span>Select your rooms : </span>
             {data.map(item=>(
                <div className="rItem">
                    <div className="rItemInfo">
                        <div className="rTitle">{item.title}</div>
                        <div className='rDesc'>{item.desc}</div>
                        <div className="rMax">
                            Max people : <b>{item.maxPeople}</b>
                        </div>
                        <div className="rPrice">{item.price}</div>
                    </div>
                        {item.roomNumbers.map(roomNumber=>(
                    <div className="room">
                            <label>{roomNumber.number}</label>
                            <input
                             type="checkbox" 
                             value={roomNumber._id} 
                             onChange= {handleSelect}
                             />
                    </div>
                        ))}
                </div>
             ))}
             <button onClick={handleClick} className='rButton'></button>
        </div>
    </div>
  )
}
