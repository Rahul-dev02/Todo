"use client"
import { createSlice ,nanoid,PayloadAction} from "@reduxjs/toolkit"
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
        addtodo:(state,action:PayloadAction<string>)=>{   
           const todo={
                id:nanoid(),
                text: action.payload
                } 
                 state.todos.push(todo)
             },
        removetodo:(state,action:PayloadAction<string>)=>{
            state.todos=state.todos.filter((todo)=> todo.id !==action.payload)
        },
        updatetodo:(state,action)=>{
            const todo = state.todos.find((t) => t.id === action.payload.id);
            if(todo){
                todo.text=action.payload.text
            }
        }
     }
      
})

export const {addtodo,removetodo,updatetodo}=todoSlice.actions;
export default  todoSlice.reducer