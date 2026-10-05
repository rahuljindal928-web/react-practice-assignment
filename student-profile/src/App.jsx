import { useRef } from 'react'
import './App.css'

function App(){

 const nameBox = useRef()

 return(

  <div>

   <nav className="nav">
    <h2>Student Profile</h2>

    <div>
     <a href="#">Home</a>
      <a href="#">Profile</a>
    </div>

   </nav>

   <div className="box">

    <h2>Student Profile</h2>

     <label>Name: </label>

    <input
     type="text"
      ref={nameBox}
    />

    <br/><br/>

    <button onClick={() => nameBox.current.focus()}>
     Focus Name
    </button>

     <button onClick={() => nameBox.current.value = ''}>
      Clear
     </button>

   </div>

  </div>

 )
}

export default App