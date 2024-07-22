import { useEffect, useState } from 'react'
import '../../assets/DojoType.css'
const HighestWPM = () => {
    const [wpm , setWpm ] =useState(localStorage.getItem('wpm'))

    useEffect(()=>{
        
    },[wpm])
  return (
    <div id='wpm' className='absolute top-5 lg:top-0 right-0 p-10 text-[24px] lg:text-[40px] text-yellow-300 '>
    {localStorage.getItem('wpm') && `Tu wpm más alto: ${wpm}`}
    </div>
  )
}

export default HighestWPM