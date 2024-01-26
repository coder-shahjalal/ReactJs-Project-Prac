import { createSlice, nanoid } from "@reduxjs/toolkit"

// 1. npm install redux and toolkit
// 2. create store ./app/store/store.js import configureStore 
// 3. create slice make folder in src ./feature/slice/Slice.js
// 4. import createSlice and 1. initialState declair 
// 5. 


const initialState = {
    todos:[{
        id:1,text:"Hello World"
    }]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action) =>{
            const todo = {
                id:nanoid(),
                text:action.payload

            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !==action.payload)
        }
    }
})

export const {addTodo,removeTodo} =todoSlice.actions

export default todoSlice.reducer