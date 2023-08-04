import React, { useState } from 'react'
import NavBar from './NavBar'
import SearchPage from './SearchPage'
import Home from './Home'
import About from './About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Footer'

function Main() {

  const [inputs,setInput]=useState("")
 const getData=(data)=>{
      setInput(data)
 }
   
  return (
    <>
    
    <BrowserRouter>
    <NavBar getdata={getData}></NavBar>

    <Routes>
        <Route exact path='/'element={<Home></Home>}></Route>
        <Route exact path='/searchpage'element={<SearchPage hello={inputs}/>}></Route>
        <Route exact path='/about'element={<About></About>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default Main