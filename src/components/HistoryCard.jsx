import React from 'react'

function HistoryCard({data}) {
  return (
    <div className='flex justify-between p-2 hover:bg-slate-100'>
        <div>{data.location}</div>
        <div><button>Delete</button></div>
    </div>
  )
}

export default HistoryCard
