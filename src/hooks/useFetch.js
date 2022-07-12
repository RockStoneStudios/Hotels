import {useEffect, useState} from 'react';
import axios from 'axios';
import clienteAxios from '../config/clientAxios';
const useFetch = url => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    useEffect(()=>{
        const fetchData = async() => {
            setLoading(true);
            try {
                const res = await clienteAxios(url);
                setData(res.data)
            }catch(error){
                setError(error)
            }
            setLoading(false);
        }
        fetchData()
    },[url])
    
    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await clienteAxios(url);
            setData(res.data);
        }catch(error){
            setError(error)
        }
        setLoading(false);
    }
   return {data,loading,error,reFetch}
}


export default useFetch;