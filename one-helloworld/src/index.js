import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
function App(){
  return(
    <div>
    <h1 style={{textAlign:'center'}}>Hello World</h1>
    <button className="btn">Click Me</button>

    </div>
    
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))