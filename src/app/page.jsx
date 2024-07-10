import React from 'react';
import myImage from './luffy2.png';

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 style={{color: 'blue', fontSize : '50px', textAlign: 'center'}}>Home Page</h1>
      <hr />
      <input type="text" />
      <button className='p-3 rounded-md bg-[#964B00] text-white  '>Learn More</button>
      <img className='bg-cover h-[70vh] mt-8' src={myImage.src} alt="" />
    </div>
  )
}

export default Home