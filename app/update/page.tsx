"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetodo, updatetodo } from "@/lib/feature/todo/todoslice";
import { RootState } from "@/lib/store";

const ShowTodo = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [currentTodoId, setCurrentTodoId] = useState<string | null>(null);

  const updateTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentTodoId) {
      dispatch(updatetodo({ id: currentTodoId, text: input }));
      setInput("");
      setCurrentTodoId(null); 
    }
  };

  return (
    <>
      <div className="text-center">Todos</div>
      {currentTodoId && (
        <div className="flex justify-center">
          <form
            onSubmit={updateTodoHandler}
            className="space-x-3 mt-12 box"
          >
            <input
              type="text"
              className="bg-gray-800 rounded border mb-4 border-gray-700 
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 
                         text-base outline-none text-gray-100 py-1 px-3 leading-8 
                         transition-colors duration-200 ease-in-out"
              placeholder="update your todo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 px-6 
                         focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Update Todo
            </button>
          </form>
        </div>
      )}

      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800
                 px-4 py-2 rounded"
          >
            <div className="text-white">{todo.text}</div>

            <div className="flex gap-2">
              <button
                className="text-white"
                onClick={() => {
                  setCurrentTodoId(todo.id);
                  setInput(todo.text); 
                }}
              >
                Edit
              </button>

              <button
                onClick={() => dispatch(removetodo(todo.id))}
                className="text-white border-0 py-1 px-4 focus:outline-none
                           hover:bg-red-200 rounded text-md"
              >
                <img src="/delete_button.png" alt="delete" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ShowTodo;
