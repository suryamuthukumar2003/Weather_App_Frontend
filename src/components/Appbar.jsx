import React from 'react'
import brandlogo from '../assets/brandlogo.png';
function Appbar() {
  return (
    <nav className='pt-4 shadow-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-7 '>
      <div className='md:flex justify-between'>
        <div className='flex justify-between mb-4' >
            <div className='flex space-x-1 justify-center'>
                <span className='object-cover w-[45px] h-1/12'><img src={brandlogo} className=''/></span>
                <span className='text-white text-4xl font-bold'>Weather</span>
                <span className='text-white text-3xl font-medium self-center'>App</span>
            </div>
        </div>
        <div className='self-center'>
            <ul className='w-full md:flex md:space-x-8 space-y-4 md:space-y-0'>
                <li>
                    <a href="#" className='menu'>About</a>
                </li>
                <li>
                    <a href="" className='menu'>Login</a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Appbar;
