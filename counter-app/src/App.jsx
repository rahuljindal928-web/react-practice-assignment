import { useState } from 'react'
import './App.css'

function App() {

 const [count,setCount] = useState(0)

 return (
  <div>

   <nav className="nav">
    <h2>Counter App</h2>
    <div>
     <a href="#">Home</a>
      <a href="#">About</a>
    </div>
   </nav>

   <div className="box">

    <h2 className="count">Count: {count}</h2>

    <p>Click the buttons to change the count.</p>

    <div className="buttons">
     <button onClick={()=>setCount(count+1)}>Increase</button>

      <button onClick={()=>setCount(count-1)}>Decrease</button>

     <button onClick={()=>setCount(0)}>Reset</button>
    </div>

   </div>

  </div>
 )
}

export default App