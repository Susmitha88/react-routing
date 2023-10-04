import React from 'react'
import{conncet} from 'react-redux'
function Todolist(){
    var [newtodo,setNewtodo]=useState("")
    return(
        <div className='mybox'>
            <h1>Todolist</h1>
            <input type="text" onchange={(e)=>{setNewtodo(e.target.value)}}/>
             <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:newtodo})}}>Add Todo</button>

            <ul>
                {
                    Props.t.todolist.map((todo)=>{
                        return<li>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default connect(store=>store)(Todolist)