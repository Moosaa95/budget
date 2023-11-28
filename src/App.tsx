import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout'
import Budget from './budget'




const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={"home"} />
          <Route path="/reports" element={"reports"} />
          <Route path="/chat" element={"chat"} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/profile" element={"profile"} />
        </Route>
      </Routes>
    </>
  )
}

export default App