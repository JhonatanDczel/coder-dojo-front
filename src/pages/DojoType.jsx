import DisplayArea from '../components/minigame/DisplayArea'
import Logo from '../components/minigame/Logo'
import HighestWPM from '../components/minigame/HighestWPM'
import Footer from '../components/minigame/Footer'
import { useEffect, useRef, useState } from 'react'

const DojoType = () => {

  useEffect(() => {
    window.localStorage.setItem("wpm", 60);
  }, [])
  

  const [display, setDisplay] = useState(false)
  const inputRef = useRef();

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setDisplay(true)
    }
  }

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress)
    return () => {
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [])

  return (
    <div className='flex flex-col justify-center items-center bg-gray-800 bg-opacity-0 h-full w-full'>
      <Logo />
      <HighestWPM />
      <input
        ref={inputRef}
        type="text"
        className='absolute opacity-0 pointer-events-none'
      />
      {display ? <DisplayArea /> : <h1 className='text-3xl text-gray-400'>Presiona <span className='animate-pulse bg-gray-900 px-2 border rounded-lg'>Enter</span> para empezar</h1>}
      <button className='absolute lg:hidden bottom-16 bg-purple-500 text-white mb-5 py-1 px-2 rounded-md border' onClick={handleButtonClick}>Open Keyboard</button>
      <Footer />
    </div>
  )
}

export default DojoType
