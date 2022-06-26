import React,{useState} from 'react'
import './header.css';
import {faBed, faCalendarDay, faCalendarDays, faCar, faPerson, faPlane,faTaxi} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import {useNavigate} from 'react-router-dom'
const Header = ({type}) => {
      const navigate = useNavigate();
      const [destination,setDestination] = useState("");
      const [openDate,setOpenDate] = useState(false); 
      const [date,setDate] = useState([{

          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
      }
      ]);

      const [openOptions,setOpenOptions] = useState(false);
      const [options,setOptions] = useState({
          adult : 1,
          children : 0,
          room : 1
      });

      const handleOption = (type,op) =>{
           setOptions((prev) => {return {
               ...prev ,[type] : op === "i" ? options[type]+1 : options[type]-1
           }})
      }


      const handleSearch = () => {
          console.log(destination);
           navigate('/hoteles',{state :{destination,date,options} })
      }

  return (
    <div className='header'>
     <div  className={type=== "list" ? "headerContainer listMode" : "headerContainer"}>

        <div className="headerList">
            <div className="headerListItem active">
               <FontAwesomeIcon icon={faBed}  />
               <span>Stays</span>
            </div>
            <div className="headerListItem">
               <FontAwesomeIcon icon={faPlane} />
               <span>Flights</span>
            </div>
            <div className="headerListItem">
               <FontAwesomeIcon icon={faCar} />
               <span>Car rentals</span>
            </div>
            <div className="headerListItem">
               <FontAwesomeIcon icon={faBed} />
               <span>Attractions</span>
            </div>
            <div className="headerListItem">
               <FontAwesomeIcon icon={faTaxi} />
               <span>Airport taxis</span>
            </div>
         </div>
        
         { type !== "list" &&
          <>
          <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
           <p className="headerDesc">
              Get rewarded for your travels - unlock instant savings of 10% or more 
              with a free Sopebooking account
          </p>
          <button className='headerBtn'>Sign in / Register</button>
           <div className='headerSearch'>
               <div className="headerSearchItem">
                   <FontAwesomeIcon icon={faBed} className = "headerIcon" />
                   
               <input 
                type="text" 
                placeholder='Where are you going'
                className='headerSearchInput'
                 onChange={e =>setDestination(e.target.value)}
                 />
               </div>
               <div className="headerSearchItem">
                   <FontAwesomeIcon icon={faCalendarDays} className = "headerIcon" />
                   <span 
                    onClick={()=> setOpenDate(!openDate)}
                   className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yy")} to ${format(date[0].endDate,"MM/dd/yy")}`}</span>
                 {
                     openDate &&  <DateRange
                     editableDateInputs ={true}
                     onChange={item => setDate([item.selection])}
                     moveRangeOnFirstSelection={false}
                     ranges={date}
                     className = "date"
                     minDate={new Date()}
                     />
                 } 
                
               </div>
               <div className="headerSearchItem">
                   <FontAwesomeIcon icon={faPerson} className = "headerIcon" />
                    <span onClick={()=> setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                {openOptions && <div className="options">
                     <div className="optionItem">
                         <span className="optionText">Adult</span>
                          <div className="optionCounter">
                          <button
                           className="optionCounterButton"
                           onClick={()=> handleOption("adult","d")}
                           disabled= {options.adult <=1}
                          >-</button>
                         <span className="optionCounterNumber">{options.adult}</span>
                         <button 
                         
                         className="optionCounterButton"
                         onClick={()=> handleOption("adult","i")}
                         >+</button>
                          </div>
                     </div>
                     <div className="optionItem">
                         <span className="optionText">Children</span>
                         <div className="optionCounter">
                            <button
                             className="optionCounterButton"
                             onClick={()=> handleOption("children","d")}
                             disabled= {options.children <=0}
                             >-</button>
                            <span className="optionCounterNumber">{options.children}</span>
                            <button
                               onClick={()=> handleOption("children","i")}
                            className="optionCounterButton">+</button>
                         </div>
                     </div>
                     <div className="optionItem">
                         <span className="optionText">Room</span>
                        <div className="optionCounter">
                            <button
                             disabled= {options.room <=1}
                            onClick={()=> handleOption("room","d")}
                            className="optionCounterButton">-</button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button
                               onClick={()=> handleOption("room","i")}
                            className="optionCounterButton">+</button>
                        </div>
                     </div>
                    
                 </div>
                 }
               </div>
               <div className="headerSearchItem">
                   <button className="headerBtn" onClick={handleSearch}>
                       Search
                   </button>
               </div>
           </div>
           </>
           }
        </div>
    </div>
  )
}

export default Header