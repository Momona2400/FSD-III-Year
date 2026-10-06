import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route index element={<About/>}/>
        <Route path="/counter" element={<h1>counter app</h1>}/>
        <Route path="/stopwatch" element={<h1>Stopwatch app</h1>}/>
        <Route path="/store" element={<h1>Shopping app</h1>}/>
        <Route path="/login" element={<h1>Login page</h1>}/>
        <Route path="*" element={<h1>Error:page not found</h1>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App