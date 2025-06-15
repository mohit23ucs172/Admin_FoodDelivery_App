import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import SideBar from './components/SideBar/SideBar.jsx'
import {Route, Routes} from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import Orders from './pages/Orders/Orders.jsx'
import List from './pages/List/List.jsx'
  import { ToastContainer } from 'react-toastify';
const App = () => {

  const url="http://localhost:4000"
  
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
           <Route path='/add' element={<Add url={url} />} />
           <Route path='/list' element={<List url={url} />} />
           <Route path='/orders' element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App