"use client"
import { createSlice ,nanoid} from "@reduxjs/toolkit"
type Todo = {
  id: string;   
  text: string;
};

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [{ id: "1", text: "hello todo" }],
};

const  todoSlice=createSlice({
    name:"todo",
    initialState,
     reducers:{
        addtodo:(state,action)=>{   
           const todo={
                id:nanoid(),
                text: action.payload
                } 
                 state.todos.push(todo)
             },
        removetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id !==action.payload)
        }
     }
      
})

export const {addtodo,removetodo}=todoSlice.actions;
export default  todoSlice.reducer