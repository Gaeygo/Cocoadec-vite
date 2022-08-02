import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar/>
    <Homepage/>
    </div>
  )
}

export default App
