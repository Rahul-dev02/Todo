"use client"
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {removetodo } from "@/lib/feature/todo/todoslice";
import { RootState } from "@/lib/store";
const ShowTodo=()=>{
    const todos=useSelector((state:RootState)=>state.todos)
    const dispatch=useDispatch()
    return(
        <>
        <div className="text-center">Todos</div>
        <ul className="list-none">
        {
            todos.map((todo)=>(
                <li key={todo.id}
                 className="mt-4 flex justify-between items-center bg-zinc-800
                 px-4 py-2 rounded">

                 <div className="text-white">   {todo.text}</div> 

                    <button 
                    onClick={()=>dispatch(removetodo(todo.id))}
                      className="text-white  border-0 py-1 px-4 focus: outline-none
                      hover:bg-red-200 rounded text-md">

                       <img src="/delete_button.png" alt="delete" />
                     
                    </button>
                </li>
                
            ))
        }
        </ul>

        

        </>
    )
}
export default ShowTodo;