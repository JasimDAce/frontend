// TODO: when we use next js , next js allow serversite render which help to load all the page in server but few components are only for browers which server do not understand do resolve this we use ... all events we have to do it or we can different component for it and then load it in this page.
'use client';

import React from 'react'

const EventHandling = () => {
    const previewImage = (e) =>{
        //initialize file reader 
        const file = e.target.files[0];
        const reader = new FileReader();

        //what to do when image is loaded
        reader.onload = (data) => {
            const img = new Image();
            img.src = data.target.result;
            document.body.append(img);
        }
        //load the image
        reader.readAsDataURL(file);
    }
    

  return (
    <div className=' flex flex-col gap-2 justify-center items-center text-center mx-8 '>
        <h1 className='text-4xl text-center font-bold my-5'>Event Handling in React</h1>
        <hr />
       <button className='bg-red-500 p-3 text-white rounded-md'
       onClick={()=>{alert('button was clicked')}}>Click ME</button>
       <input 
       className='border-2 rounded-md py-1 px-3 w-full mt-3'
       onChange={(e) => {console.log(e.target.value)}}
       type="text" />
       <input type="color" className='mt-5'
       onChange={(e) => {document.body.style.backgroundColor = e.target.value}}
       />
       <input type="file" 
       multiple
       onChange={(e) => { console.log(e.target.files);}} />

       <input type="file" 
       onChange={previewImage} />

    </div>
  )
}

export default EventHandling