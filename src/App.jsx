
import './App.css';
import {Link, Outlet} from 'react-router-dom';
function App(){
  return(
    <div className="mybox">
     <Link to='/countries'>Countries</Link>&nbsp;&nbsp;&npsb;
     <Link to='/products'>Products</Link>&nbsp;&nbsp;&npsb;
     <Link to='/counter'>Counter</Link>&nbsp;&nbsp;&npsb;
     <Link to='/todolist'>Todolist</Link>&nbsp;&nbsp;&npsb;
     <Outlet></Outlet>
    </div>
  );
}
export default App