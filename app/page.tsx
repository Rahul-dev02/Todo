"use client"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "@/lib/feature/todo/todoslice";


const  Home=()=> {
const [input,setInput]=useState(' ')
const dispatch=useDispatch();
const addTodoHandler=(e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault();
       dispatch(addtodo(input))
       setInput(' ')
}

  return (
     <>
     <h1>leran React redux toolkit</h1>

     <div className="flex justify-center">
     <form onSubmit={addTodoHandler}
      className="space-x-3 mt-12 box ">

        <input type="text"
         className="bg-gray-800 rounded border mb-4
                    border-gray-700 focus:border-indigo-500
                     focus:ring-2 focus:ring-indigo-900 text-base
                     outline-none text-gray-100 py-1 px-3 leading-8
                     transition-colors duration-200 ease-in-out"
                      
        placeholder="Enter your todo..."
        value={input} 
        onChange={(e) => setInput(e.target.value)}
/>

        <button
            type="submit"
            className="text-white bg-indigo-500 border-0 p px-6 
            focus: outline-none hover:bg-indigo-600 rounded text-lg">
            Add Todo
            </button>
     </form>
     </div>
     </>
  );
}
export default Home ;