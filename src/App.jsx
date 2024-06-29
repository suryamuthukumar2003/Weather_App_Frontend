import { Fragment, createContext, useState } from 'react'
import Appbar from './components/Appbar'
import History from './components/History'
import WeatherCard from './components/WeatherCard';
import Login from './pages/Login';
import { Outlet } from 'react-router-dom';

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
      <div className=" min-h-screen">
        <Appbar />
        <Outlet/>
      </div>
    </ToggleState.Provider>
  )
}

export default App
