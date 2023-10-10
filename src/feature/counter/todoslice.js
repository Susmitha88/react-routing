import { createSlice } from '@reduxjs/toolkit' ;
const initialState = {
    todolist:['susmitha','vijay','vanitha']
}
export const todoSlice = createSlice({
    name:'todolist',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            state.todo.push(action.payload)
        },
         deletetodo:(state,action)=>{
            state.todos.splice(action.payload,1)
         }
    }
}) 
export const {addTodo,deleteTodo} = todoSlice.actions;
var todoReducer = todoSlice.reducer;
export default todoReducer;