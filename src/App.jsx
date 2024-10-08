import { useState } from 'react'
import './App.css'
import Sidenav from './sidenav'
import Navbar from './navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
     <Sidenav/> 
    </>
  )
}

export default App
