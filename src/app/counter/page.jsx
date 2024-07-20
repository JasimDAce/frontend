'use client'
import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increaseCount = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    const decreaseCount = () => {
        setCounter(prevCounter => prevCounter - 1);
    }

    return (
        <div className='flex flex-row gap-4 justify-center items-center h-screen m-0'>
            <button onClick={decreaseCount}>-</button>
            <p>{counter}</p>
            <button onClick={increaseCount}>+</button>
        </div>
    )
}

export default Counter
