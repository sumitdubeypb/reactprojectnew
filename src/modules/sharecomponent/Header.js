import React from 'react'
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <div className="container-fluid">
      <div className="row ">
        <nav class="navbar navbar-expand-lg  bg-primary fixed-top mt-1">
          <div class="container-fluid  col-8">
            <Link class="navbar-brand" to="#">
              <img src="" alt="Logo" width="30" height="50" class="d-inline-block align-text-top" />
            </Link>
          </div>
          <div class="container-fluid ">
            {/* <Link class="navbar-brand" to="#">Navbar</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false">
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div className="row">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="#">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="#">Dashboard</Link>
                </li>
                <li class="nav-item">
                  < Link class="nav-link active" to="#">Orders</Link>
                </li>
                <li class="nav-item">
                  < Link class="nav-link active" to="#">Products</Link>
                </li>
                <li class="nav-item">
                  < Link class="nav-link active" to="#">Customers</Link>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </Link>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to="#">Action</Link></li>
                    <li><Link class="dropdown-item" to="#">Another action</Link></li>
                    <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
           
          </div>
          <div className="me-3 ">
            <Link class="navbar-brand" to="/">
              <img src="sd.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
              
            </Link>
          </div>
        </nav>
        </div>
      </div>
    </>
  )
}
