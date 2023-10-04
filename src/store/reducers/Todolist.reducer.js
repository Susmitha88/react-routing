const initialState={
    todolist:["clear car","pay bills","get bmw"]
}
function todolistReducer(state=initialState,action) {
    if(action.type==='ADDTODO'){
        return{todolist:[...state.todolist,action.payload]}
    }
    return state
}
export default todolistReducer;