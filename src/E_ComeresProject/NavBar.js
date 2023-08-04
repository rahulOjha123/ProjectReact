import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../E_ComeresProject/Nav.css"



function NavBar(props) {
    
    const [input,setInput]=useState();

    const handleSubmit=(e)=>{
        e.preventDefault()
        props.getdata(input)

    }

  return (
    <div className=''>
    <nav className="navbar navbar-expand-lg bg-primary ">
        <div className="container-fluid bg-primary ">
            <NavLink className="navbar-brand  text-white   fs-1  ms-5" href="#"><b>Flipkart</b></NavLink>
            
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ">
                    <li className="nav-item fs-5">
                    <NavLink className="nav-link text-white" aria-current="page" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item fs-5">
                    <NavLink className="nav-link text-white" exact to="/searchpage">Gallary</NavLink>
                    </li>
                  
                    <li className="nav-item fs-5">
                    <NavLink className="nav-link text-white " exact to="/about">About</NavLink>
                    </li>
                </ul>
                <form className=" form d-flex "onSubmit={handleSubmit}>
                    <input className="form-control me-2  " onChange={(e)=>{setInput(e.target.value)}} type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
        </nav>
        <div>
            
        </div>
    </div>
  )
}

export default NavBar