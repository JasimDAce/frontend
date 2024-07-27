'use client'
import React, { useState } from 'react'

const Counter = () => {
    const [step, setstep] = useState(0);
    const [count, setcount] = useState(0);
    const changeStep = (e) => {
        setstep(e.target.value);
    }
    const increamentCount = () => {
        const newCount = parseInt(count) + parseInt(step);
        setcount(newCount);
    }
    const decrementCount = () => {
        const newCount = parseInt(count) - parseInt(step);
        setcount(newCount);
    }
  return (
    <div className='flex flex-col gap-3 justify-center items-center h-screen'>
        <p className='text-2xl'>{count}</p>
        <input className='border-2' type="Number"  placeholder='Step' onChange={changeStep}/>
        <div className='grid grid-row-12 grid-flow-col gap-2'>
        <button className='row-span-6 p-2 bg-green-400 text-white' onClick={increamentCount}>Increment</button>
        <button className='row-span-6 p-2 bg-red-500 text-white' onClick={decrementCount}>Decrement</button>
        </div>

    </div>
  )
}

export default Counter