import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <div className='App-Container'>
      <h1 style={{backgroundColor:"orange"}}>MERN Frontend</h1>
      <Home/>
      <h3>Tis is Footer</h3>
    </div>
    
  )
}

export default App
