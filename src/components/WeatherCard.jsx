import React, { useState } from 'react'
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { TbWorldLatitude } from "react-icons/tb";
import { TbWorldLongitude } from "react-icons/tb";
import { WiDegrees } from "react-icons/wi";
function WeatherCard() {
  return (
    <div className='absolute top-0 left-0 md:static'>
        <div className='flex flex-col p-5 border border-blue-700 rounded-md'>
          <div>
            <img src="" alt="" />
          </div>
          <div className='flex items-baseline -space-x-1'>
            <span>20</span><span><WiDegrees/></span><span className='text-xl text-slate-800'>c</span>
          </div>
          <div className=''>
            <span className='text-2xl font-light'>London</span><span className='text-xl font-medium'>,GB</span>
          </div>
          <div className='flex justify-center space-x-5'>
            <div>
              <TbWorldLatitude/>
              <div>xgfhf</div>
            </div>
            <div>
              <TbWorldLongitude/>
              <div>dfjff</div>
            </div>
          </div>
          <div className='flex justify-between items-baseline'>
            <div className='flex flex-col items-center'>
              <WiHumidity className='text-3xl'/>
              <div>humidity</div>
            </div>
            <div className='flex flex-col items-center'>
              <FaWind className='text-xl'/>
              <div>Wind</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WeatherCard;