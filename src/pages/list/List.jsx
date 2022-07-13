import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './list.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';
import useFetch from '../../hooks/useFetch';

const List = () => {
 
   const location = useLocation();
   const [destination,setDestination] = useState(location.state.destination);
   const [dates,setDates] = useState(location.state.dates);
   const [openDate,setOpenDate] = useState(false);
   const [options,setOptions] = useState(location.state.options);
   const [min,setMin] = useState(undefined);
   const [max,setMax] = useState(undefined);
    const {data,loading,error,reFetch} = useFetch(`/hotels?city=${destination}&min=${min || 20000}&max=${max || 999999}`)
  
      const handleClick = () => {
          reFetch();
      }

  return (
    <>
     <Navbar/>
     <Header type = "list"/>
     <div className="listContainer">
       <div className="listWrapper">
         <div className="listSearch">
           <h1 className = "listTitle">Search</h1>
            <div className="listItem">
              <label htmlFor="#">Destination</label>
              <input placeholder= {destination} type="text" />
            </div>
            <div className="listItem">
              <label htmlFor="#">Check-in Date</label>
               <span onClick={()=> setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")}`}</span>
            {
              openDate && (
              <DateRange
              onChange={(item)=>setDates([item.selection])}
              minDate = {new Date()}
              ranges = {dates}
             />
            )}  
            </div>
             <div className="lsItem">
              <label>Options</label>
               <div className="lsOptions">

               
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min Price <small>per Night</small></span>
                   <input 
                   type= "number"
                    className='lsOptionInput'
                     onChange={e=>setMin(e.target.value)}
                    />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Max Price <small>per Night</small></span>
                   <input
                    type= "number" min={1}
                     className='lsOptionInput'
                      onChange={(e)=> setMax(e.target.value)}
                     />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                   <input type= "number" className='lsOptionInput' placeholder= {options.adult} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                   <input type= "number" min={0} className='lsOptionInput' placeholder = {options.children} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                   <input type= "number" min= {1} className='lsOptionInput' placeholder={options.room}/>
                </div>
              </div>
             </div>
              <button onClick={handleClick}>Search</button>
          </div>
         <div className="listResult">
          {
            loading ? "Loading" : 
            <>
              {data.map(item=>(

               <SearchItem item={item} key={item._id}/>
              ))}
            </>
          }
         
          
         </div>
       </div>
     </div>
    </>
  )
}

export default List;