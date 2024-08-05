'use client'
import axios from 'axios';
import React from 'react'

const UploadFile = () => {
    const uploadTOCould = (e) => {
      const file = e.target.files[0];
      if(!file) return;

      const fd = new FormData();
      fd.append('file',file);
      fd.append('upload_preset','myproject');
      fd.append('cloud_name','ddipjutsx');
      axios.post('https://api.cloudinary.com/v1_1/ddipjutsx/image/upload',fd,
        {headers: {  'Content-Type': 'multipart/form-data'}}
      ).then((response) => {
        console.log(response.data)
      }).catch((err) => {
        console.log(err);
      });
    }
  return (
    <div>
    <h1  className='text-center mt-10 text-3xl font-bold'>
      Upload Your File here
        </h1>
        <input type="file" accept='image/*' onChange={uploadTOCould}/></div>
  )
}

export default UploadFile;