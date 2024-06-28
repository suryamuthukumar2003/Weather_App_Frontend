import React from 'react'

function Model() {
  return (
    <div className='fixed bg-black inset-0 opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px] flex flex-col self-end'>
        <button className='text-white text-2xl'>X</button>
        <div className='bg-white p-3 rounded-lg'>Model</div>
      </div>
    </div>
  )
}

export default Model;
