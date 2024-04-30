// import { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
// import "./App.css"

// function App() {
//   return <p className="read-the-docs">Here WE GO</p>
// }

// export default App

import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar.jsx"
import { Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#493548] text-white">
        <NavBar />
        <div className="container mx-auto py-8">
          <Routes />
        </div>
      </div>
    </Router>
  )
}

export default App
