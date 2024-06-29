import React from 'react'
import WeatherCard from '../components/WeatherCard'
import History from '../components/History'

function Home() {
  return (
    <div className='relative md:flex'>
      <History />
      <div className='flex justify-center items-center mx-auto h-[90vh]'>
        
        <WeatherCard/>
      </div>
    </div>
  )
}

export default Home
