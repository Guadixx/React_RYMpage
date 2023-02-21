import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Layout from "./Layout/Layout";
import Header from "./Components/Header";
import AboutUs from "./Pages/AbouUs"
import Characters from "./Pages/Characters"
import Login from "./Pages/Login"
import ProtectedRoute from "./Components/ProtectedRouter";
import Shop from './Pages/Shop';


import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Outlet />
      </Layout>
      <Routes>
      <Route index element={<Home />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/characters' element={    
                                        <ProtectedRoute>
                                          <Characters />
                                        </ProtectedRoute>} />
              <Route path="/shop" element={
                                            <ProtectedRoute>
                                            <Shop />
                                            </ProtectedRoute>} />
              <Route path='/login' element={<Login />} /> 
      </Routes>
    </div>
  )
}

export default App
