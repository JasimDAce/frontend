"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

//TODO: hooks are used to manage the state just like butterfly life cycle
//This is an event

//const [num, setNum] = useState(10);

//FIXME: first value is used to read and second value is used to update first

//FIXME:basically react donot allow to change the value on event so thats why we use states or if you want to display any updates on UI you have to state

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (e) => {
    //   console.log(e.code);
    //code tells which key is pressed
    if (e.code === "Enter") {
      if (!e.target.value) {
        alert("Enter target value");
        return;
      }
      const newTask = {
        text: e.target.value,
        completed: false,
        createdAt: new Date(),
      };
      setTaskList([...taskList, newTask]);
      e.target.value = "";
      toast.success("New Task Added Succesfully");
    }
  };

  const deleteTask = (index) => {
    console.log(index);
    const temp = taskList;
    temp.splice(index, 1);
    setTaskList([...temp]);
    toast.success("Task Deleted Successfully");
  };

  const toggleComplete = (index) => {
    const temp = taskList;
    temp[index].completed = !temp[index].completed;
    setTaskList([...temp]);
  };

  return (
    <div className="max-w-[80%] mx-auto">
      <h1 className="text-5xl font-bold text-center">Todo List</h1>
      <div className="border-2 rounded-md shadow mt-5">
        <div className="border-b-2 border-gray-600 p-4 ">
          <input
            className="border-2 border-blue-500 rounded p-3 w-full"
            type="text"
            placeholder="Add a new task"
            onKeyDown={addTask}
          />
        </div>

        <div className="p-5">
          {taskList.map((task, index) => {
            return (
              <div key={index} className="shadow-md rounded -lg p-4 mb-5">
                {task.completed ?(
                <p className="text-sm bg-green-500 px-3 w-fit rounded-full text-white">Completed</p>
              ):
              <p className="text-sm bg-yellow-500 px-3 w-fit rounded-full text-white">Pending</p>
            }
                <p className={(task.completed)?'line-through':''}>{task.text}</p>
                <div className="flex gap-3 mt-3 justify-end  ">
                  <button
                    onClick={() => {
                      toggleComplete(index);
                    }}
                    className="px-3 bg-blue-500 rounded-full text-white "
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 bg-red-500 rounded-full text-white "
                    onClick={() => {
                      return deleteTask(index);
                    }}
                  >
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
