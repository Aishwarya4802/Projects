import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Components/Navbar/Login'
import Sign from './Components/Navbar/Sign'
import Navbar from './Components/Navbar'
import Home from './Components/Home/Home'
import Admin from './Components/Navbar/Admin'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/register" element={<Sign/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
