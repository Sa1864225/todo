import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './Components/TodoList';
function App() {
  const [todoList,setTodoList]=useState([{}]);
  const [title,setTitle] = useState('');
  const[desc,setDesc] = useState('');
  
  useEffect(()=>{
    axios.get(`https://fastapi-vl98.onrender.com/api/todo`).then(res=>{
      setTodoList(res.data);
    })
    .catch(error => {
      console.error('AxiosError:', error);
    })
  });
  const addTodoHandler=()=>{
    axios.post(`https://fastapi-vl98.onrender.com/api/todo/`,{"title":title,'description':desc}).then(res=>console.log(res))
    .catch(error => {
      console.error('AxiosError:', error);
    })
  };
  return (
      <div className="App list-group-item justify-content-center align-items-center mx-auto" style={{"width":"400px","backgroundColor":"white","marginTop":"15px"}}>
        <h1 className='card text-white bg-primary mb-1' stylename="max-width:20rem;">Task Manager</h1>
        <h6 className="card text-white bg-primary mb-3">FASTAPI - React - MongoDB</h6>
        <div className="card-body">
        <h5 className='card text-white bg-dark mb-3'>Add Your Task</h5>
        <span className='card-text'>
          <input className="mb-2 form-control titleIn" onChange={event=>setTitle(event.target.value)} placeholder='Title'/>
          <input  className="mb-2 form-control desIn" onChange={event=>(setDesc(event.target.value))} placeholder='Description' />
          <button className='btn btn-outline-primary mx-2 mb-3' style={{"borderRadius":"50px","fontWeight":"bold"}} onClick={addTodoHandler}>Add Task</button>
        </span>
        <h5 className="card text-white bg-dark mb-3">Your Tasks </h5>
        <div>
            <TodoList todoList={todoList} />
        </div>
      </div>
      <h6 className="card text-dark bg-warning py-1 mb-0">Copyright 2025, All rights reserved &copy;</h6>
      </div>
  );
}

export default App;
