import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'

function App() {

  return (
    <>
    <div className='app absolute h-screen w-screen  '>
      <div className=" absolute coolbg min-w-screen min-h-screen sus"/>

      <Navbar/>
      <Home/>
    </div>
    </>
  )
}

export default App
