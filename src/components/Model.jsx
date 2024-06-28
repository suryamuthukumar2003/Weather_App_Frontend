import React from 'react'

function Model({isVisible,onClose}) {
  if(!isVisible) return null;

  const handleClose=(e)=>{
    if(e.target.id==='wrapper') onClose();
  }
  return (
    <div className='fixed bg-black inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
      <div className='w-2/4 flex flex-col'>
        <button className='text-white text-2xl place-self-end' onClick={()=>onClose()}>X</button>
        <div className='bg-white p-3 rounded-lg'>Model</div>
      </div>
    </div>
  )
}

export default Model;
