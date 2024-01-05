import React, { useState } from 'react'

const App = () => {
  const [color,setColor] =useState("black")
  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>
      <div className=' bg-zinc-300 rounded-full justify-center fixed mx-[50rem] my-[50rem] px-3 py-2 flex text-white font-semibold'>
          <button onClick={()=>setColor("red")} className='px-5 py-2 rounded-3xl mr-2 drop-shadow-lg bg-[red]' >Red</button>
          <button onClick={()=>setColor("green")} className='px-5 py-2 mr-2 rounded-3xl drop-shadow-lg bg-[green]' >Green</button>
          <button onClick={()=>setColor("blue")} className='px-5 py-2 mr-2 rounded-3xl drop-shadow-lg bg-[blue]'>Blue</button>
          <button onClick={()=>setColor("gray")} className='px-5 py-2 mr-2 rounded-3xl drop-shadow-lg bg-[gray]'>Gray</button>
          <button onClick={()=>setColor("orange")} className='px-5 py-2 rounded-3xl drop-shadow-lg bg-[orange]' >Orange</button>
      </div>
    </div>
  )
}

export default App
