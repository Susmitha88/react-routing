import Form from './Form';
import './App.css';



function App() {
  return (
    <div className="myBox">
     <h1>My App</h1>
      <Link to="/Your Form">Your Form</Link>&nbsp;
      <Link to="/todolist">Todolist</Link>&nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
