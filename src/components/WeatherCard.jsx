import React, { useState } from 'react'
import Model from './Model';
function WeatherCard() {
    const[showModel,setShowModel]=useState(false);
  return (
    <div>
        <div className='mt-10'>
      <h1 className='font-medium text-4xl mb-3'>Model Sample</h1>
      <div className='flex space-x-10'>
        <button className='py-2 px-3 bg-blue-700 text-white rounded-xl' onClick={()=>setShowModel(true)}>Text Model</button>
        <button className='py-2 px-3 bg-blue-700 text-white rounded-xl'>Video Model</button>
        <button className='py-2 px-3 bg-blue-700 text-white rounded-xl'>Form Model</button>
      </div>
    </div>
    <Model isVisible={showModel} onClose={()=>setShowModel(false)}/>
    </div>
  )
}

export default WeatherCard;