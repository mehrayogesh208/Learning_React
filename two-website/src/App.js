import React from 'react'
import NavBar from './NavBar'
import CardSection from './CardSection'
import Footer from './Footer'
import AppSection from './AppSection'
import HeroSection from './HeroSection'
function App(){
  return(
    <div>
  <NavBar/>
  <HeroSection/>
   <CardSection/>
   <AppSection/>
   <Footer/>
    </div>
   
  )
}

export default App;