"use client";
import React, { useState } from "react";

//TODO: hooks are used to manage the state just like butterfly life cycle
//This is an event

//const [num, setNum] = useState(10);

//FIXME: first value is used to read and second value is used to update first
// const addTask = (e) => {
//  //   console.log(e.code);
//     //code tells which key is pressed
//     if(e.code === 'Enter'){
// num = e.target.value;
//     }
// }

//FIXME:basically react donot allow to change the value on event so thats why we use states or if you want to display any updates on UI you have to state

const TodoList = () => {
  const [taskList, setTaskList] = useState([
    { text: "Learn HTML", complete: false, createAt: new Date() },
    { text: "Learn CSS", complete: false, createAt: new Date() },
    { text: "Learn JS", complete: false, createAt: new Date() },
  ]);
  return (
    <div className="max-w-[80%] mx-auto">
      <h1 className="text-5xl font-bold text-center">Todo List</h1>
      <div className="border-2 rounded-md shadow mt-5">
        <div className="border-b-2 border-gray-600 p-4 ">
          <input
            className="border-2 border-blue-500 rounded p-3 w-full"
            type="text"
            placeholder="Add a new task"
          />
        </div>

        <div className="p-5">
          {taskList.map((task, index) => {
            return (
              <div key={index} className="shadow-md rounded -lg p-4 mb-5">
                <p className="font-bold">{task.text}</p>
                <div className="flex gap-3 mt-3 justify-end  ">
                  <button className="px-3 bg-blue-500 rounded-full text-white ">
                    Edit
                  </button>
                  <button className="px-3 bg-red-500 rounded-full text-white ">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
