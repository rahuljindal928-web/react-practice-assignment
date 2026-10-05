import {useState,useRef} from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css'


function Home(){

 return(
  <div className="box">
   <h2>Home</h2>
    <p>Welcome to Task Manager.</p>
  </div>
 )
}


function Tasks(){

 const [task,setTask] = useState('')
  const [tasks,setTasks] = useState([])

 const taskBox = useRef()


 function addTask(){

  if(task != ''){
   setTasks([...tasks,task])
    setTask('')
   taskBox.current.focus()
  }

 }


 return(

  <div className="box">

   <h2>Tasks</h2>

   <label>New Task: </label>

    <input
     ref={taskBox}
     value={task}
      onChange={(e)=>setTask(e.target.value)}
    />

   <br/><br/>

   <button onClick={addTask}>
    Add Task
   </button>

    <button onClick={()=>setTask('')}>
     Clear Input
    </button>


   <h3>Tasks: {tasks.length}</h3>

   {tasks.map((item,index)=>(
    <p key={index}>□ {item}</p>
   ))}

  </div>

 )
}


function About(){

 return(
  <div className="box">

   <h2>About</h2>

   <p>This is a simple Task Manager made using React.</p>

  </div>
 )
}



function App(){

 return(

  <BrowserRouter>

   <div>

    <nav className="nav">

     <h2>Task Manager</h2>

     <div>
      <Link to="/">Home</Link>
       <Link to="/tasks">Tasks</Link>
      <Link to="/about">About</Link>
     </div>

    </nav>


    <Routes>

     <Route path="/" element={<Home/>}/>

      <Route path="/tasks" element={<Tasks/>}/>

     <Route path="/about" element={<About/>}/>

    </Routes>


   </div>

  </BrowserRouter>

 )
}

export default App