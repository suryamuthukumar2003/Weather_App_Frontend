import { Fragment, createContext, useState } from 'react'
import Appbar from './components/Appbar'
import History from './components/History'
import WeatherCard from './components/WeatherCard';

export const ToggleState=createContext();


function App() {
  const[toggle,setToggle]=useState(false);
  const[navWidth,setNavWidth]=useState(0);
  
  return(
    <ToggleState.Provider value={{
      toggle,
      setToggle,
      navWidth,
      setNavWidth
      }}>
      <div className="bg-gray-100 min-h-screen">
        <Appbar />
        <div className="md:flex relative">
          <History />
          <WeatherCard />
        </div>
      </div>
    </ToggleState.Provider>
  )
}

export default App
