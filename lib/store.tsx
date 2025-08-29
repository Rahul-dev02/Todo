"use client"
import { configureStore } from "@reduxjs/toolkit";
 import todoReducer from  './feature/todo/todoslice';
 import { Provider } from "react-redux";

const store=configureStore({
    reducer:todoReducer
});


const ReduxProvider=({children}:{children:React.ReactNode})=>{

    return(
        <Provider store={store}>
       
           {children}
        </Provider>
    )
}

export type RootState = ReturnType<typeof store.getState>
export default ReduxProvider;