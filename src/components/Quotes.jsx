import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Quotes = () => {

    const [quote,setQuote] = useState();

    useEffect(()=>{
      axios.get('http://api.quotable.io/random').then(response=>{
        setQuote(response.data.content)
      }).catch(err =>{
        console.log(err);
        setQuote(err);
      })
    },[])

  return (
    
    <div className='w-full h-auto justify-center items-center flex pt-24 pb-24'>
            <div className='w-[300px] h-[200px] justify-center items-center bg-slate-400 flex rounded-xl shadow-inner z-10'>
                <h1 className='py-4 px-4 font-mono cursor-auto'>{quote}</h1>
            </div>
            <div className='w-[300px] h-[200px] bg-slate-700 absolute rounded-xl shadow-inner ml-3 mt-3'></div>
    </div>
  )
}

export default Quotes