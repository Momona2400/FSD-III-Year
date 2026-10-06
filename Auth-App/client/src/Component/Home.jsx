import React from 'react'
import Navbar from "./Navbar"
import {Outlet} from "react-router-dom"
const Home = () => {
  return (
    <div>
      <h1 style={{color:"red"}}>Home page</h1>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Home