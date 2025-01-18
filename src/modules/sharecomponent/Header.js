import React from 'react'
import { Link } from "react-router-dom"
import { FcHome } from "react-icons/fc";
import { AiFillDashboard } from "react-icons/ai";
import { FaBorderStyle } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdArrowDropdownCircle } from "react-icons/io";



export default function header() {
  return (
    <header className="container-fluid">
    <nav className="navbar navbar-expand-lg  bg-primary  col-md-12 navh">
    
  <div className="container-fluid ">
     <Link className="navbar-brand" to="#">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
    </Link>
    {/* <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span> 
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#"><span className="cush"><FcHome/></span>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#"><span className="cush">< AiFillDashboard/></span>Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#"><FaBorderStyle/><span className="cush"></span>Orders</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#"><span className="cush"><MdProductionQuantityLimits/></span>Product</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <span className="cush" ><IoMdArrowDropdownCircle/></span>
           Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn border btn-outline-warning text-danger" type="submit">Search</button>
      </form>
    </div>

    <Link className="navbar-brand mx-3" to="#">
      <img src="F:/html practice/reactnewproject/reactprojetnew/src/images/sd.jpg" alt="Bootstrap" width="30" height="24"/>
    </Link>
  </div>
</nav>
</header>
  )
}
