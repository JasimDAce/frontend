'use client'
import React, { useState } from "react";

const FormInputStateManagement = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');

    const DisplayName = (e) => {
        setname(e.target.value);
    }
    const DisplayEmail = (e) => {
        setemail(e.target.value);
    }
    const DisplayMessage = (e) => {
        setmessage(e.target.value);
    }
  return (
    <div>
      <form className="flex flex-col justify-center items-center gap-5 mt-10 bg-red-200 w-5/12 mx-auto p-4 outline-none" action="">
        
          <label className="text-2xl" htmlFor="name">Name</label>
          <input className="outline-none bg-gray-200 p-2" type="text" onChange={DisplayName} />
        
       
          <label className="text-2xl" htmlFor="email">Email</label>
          <input className="outline-none bg-gray-200 p-2"  type="email" onChange={DisplayEmail} />
     
          <label className="text-2xl" htmlFor="name">Message</label>
          <textarea className="outline-none bg-gray-200 p-2 w-auto"  name="message" id="" onChange={DisplayMessage}></textarea>
        
      </form>

      <div className="text-2xl mt-7 gap-7 flex flex-col pl-4 text-slate-400">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Message: {message}</p>
      </div>
    </div>
  );
};

export default FormInputStateManagement;
