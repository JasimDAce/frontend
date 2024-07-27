'use client'
import React, { useState } from 'react'



const TextInputTracker = () => {
  const [text, settext] = useState('');
  const updateInput = (e) => {
      settext(e.target.value);
  }
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen'>
        <input className='border-2' type="text" onChange={updateInput} />
        <p>{text}</p>
    </div>
  )
}

export default TextInputTracker