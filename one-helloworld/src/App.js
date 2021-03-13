import React from 'react'
import './style.css'
import Button from './Button'
function App(){
  return(
    <div>
    <h1 style={{textAlign:'center'}}>Hello World</h1>
    {/* <button className="btn">Play Store</button>
    <button className="btn">App Store</button> */}
    <Button text = "AppStore"/> <Button text = "PlayStore"/>
    


    </div>
    
  )
}

export default App