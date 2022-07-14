import React ,{useContext}from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import "./login.css";
import clienteAxios from '../../config/clientAxios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials,setCredentials] = useState({
        username : undefined,
        password : undefined
    });
    const {user,loading,error,dispatch} = useContext(AuthContext);

       const navigate = useNavigate();
 
      const handleChange = e =>{
         setCredentials(prev => ({...prev,[e.target.id]: e.target.value}))
      }
    
      const handleClick = async e => {
        e.preventDefault();
        dispatch({type : "LOGIN_START"})
        try{
            const res = await clienteAxios.post('/auth/login',credentials)
            dispatch({type: "LOGIN_SUCCESS",payload : res.data});
            navigate("/")
        }catch(error){
            dispatch({type : "LOGIN_FAILURE",payload : error.response.data})
        }
      }
  console.log(user)
  return (
     <div className='login'>
       <div className="lContainer">
        <input type= "text" placeholder='username' id='username' className='lInput' onChange={handleChange}/>
        <input type="password" placeholder='password' id='password' className='lInput' onChange={handleChange} />
        <button disabled={loading} onClick={handleClick} className='lButton'>Login</button>
        {error && <span>{error.message}</span>}
       </div>
     </div>
  )
}

export default Login