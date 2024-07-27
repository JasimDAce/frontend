"use client";
import React from "react";
import { useState } from "react";

const ToggleVisibility = () => {
  const [visibility, setvisibility] = useState(true);
  const toggleVisibility = () => {
    setvisibility(!visibility);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
     {visibility && <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo doloribus
        distinctio temporibus! Sunt perferendis atque enim nam iste, placeat quo
        blanditiis quis ab veniam id.
      </p>} 
      <button
        className="p-2 bg-gray-400 text-white "
        onClick={toggleVisibility}
      >
        Toggle
      </button>
    </div>
  );
};

export default ToggleVisibility;
