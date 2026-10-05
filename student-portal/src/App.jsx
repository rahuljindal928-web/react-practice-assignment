import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css'

function Home(){
 return(
  <div className="box">
   <h2>Home Page</h2>
   <p>Welcome to the Student Portal.</p>
  </div>
 )
}

function Students(){
 return(
  <div className="box">
   <h2>Students</h2>

   <p>Rahul</p>
    <p>Aman</p>
   <p>Riya</p>

  </div>
 )
}

function About(){
 return(
  <div className="box">
   <h2>About</h2>
   <p>This is a simple student portal made using React Router.</p>
  </div>
 )
}

function App(){

 return(

  <BrowserRouter>

   <div>

    <nav className="nav">

     <h2>Student Portal</h2>

     <div>
      <Link to="/">Home</Link>
       <Link to="/students">Students</Link>
      <Link to="/about">About</Link>
     </div>

    </nav>

    <Routes>

     <Route path="/" element={<Home/>}/>

     <Route path="/students" element={<Students/>}/>

      <Route path="/about" element={<About/>}/>

    </Routes>

   </div>

  </BrowserRouter>

 )
}

export default App