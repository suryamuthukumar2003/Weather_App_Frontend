import React, { useContext } from 'react'
import HistoryCard from './HistoryCard';
import { ToggleState } from '../App';

function History() {
    const {toggle,navWidth}=useContext(ToggleState);

    const historydata=[{
        id:0,
        location:"Coimbatore"
    },{
        id:1,
        location:"Chennai"
    },{
        id:3,
        location:"Mumbai"
    },
    {
        id:4,
        location:"Mumbai"
    },
    {
        id:5,
        location:"Mumbai"
    },{
        id:6,
        location:"Mumbai"
    },{
        id:7,
        location:"Mumbai"
    },{
        id:8,
        location:"Mumbai"
    },{
        id:9,
        location:"Mumbai"
    },{
        id:10,
        location:"Mumbai"
    },{
        id:11,
        location:"Mumbai"
    },{
        id:12,
        location:"Mumbai"
    },{
        id:13,
        location:"Mumbai"
    },{
        id:14,
        location:"Mumbai"
    },]
  return (
    <div className={`p-4 bg-cyan-200 flex flex-col w-[75%] md:w-[290px] space-y-3 relative ${!toggle ? "block":"hidden"}`} style={{ height: `calc(100vh - ${navWidth}px)`}} >

        <div className='flex space-x-2 items-center w-full'>
            <div><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#64748B"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg></div>
            <div className='text-lg text-slate-500 w-3/4'>History</div>
            <div className='justify-self-end'><button className='border border-slate-500 px-2 py-1 rounded-md shadow-md'>Clear</button></div>
        </div>
        <div className='overflow-y-scroll scrollbar scrollbar-w-[5px] scrollbar-h-2 scrollbar-thumb-rounded-md scrollbar-thumb-white p-1'>
            <div>
                {historydata.map((data,index)=>{
                    return(
                        <HistoryCard key={index} data={data}/>
                    )
                })}
            </div>
        </div>
        <div className='flex space-x-2 md:hidden absolute bottom-2 '>
            <div>Login</div>
            <div>About</div>
        </div>
    </div>
  )
}

export default History;
