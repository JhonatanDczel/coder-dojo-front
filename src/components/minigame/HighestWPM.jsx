import React, { useEffect, useState } from 'react'
import '../App.css'
const HighestWPM = () => {
    const [wpm , setWpm ] =useState(localStorage.getItem('wpm'))

    useEffect(()=>{
        
    },[wpm])
  return (
    <div id='wpm' className='absolute top-5 lg:top-0 right-0 p-10 text-[24px] lg:text-[40px] text-orange-400 '>
    {localStorage.getItem('wpm') && `Highest wpm : ${wpm}`}
    </div>
  )
}

export default HighestWPM