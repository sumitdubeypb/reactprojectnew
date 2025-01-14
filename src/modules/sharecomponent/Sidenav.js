import React from 'react'
import { Link } from "react-router-dom"

export default function sidenav() {
  return (
    <>
    <div className="flex-shrink-0 p-3 col-3 bg-dark position-fixed">
  
    
    <Link to="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
     
      <span className="fs-5 fw-semibold">Collapsible</span>
    </Link>
    <ul className="list-unstyled ps-0  bg-warning p-2 ">
      <li className="mb-1 ms-3 ">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-white " data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
         * Home
        </button>
        <div className="collapse show" id="home-collapse" >
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</Link></li>
          </ul>
        </div>
      </li>
      <li className="mb-1 ms-3">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-white" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="true">
        * Dashboard
        </button>
        <div className="collapse show" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</Link></li>
          </ul>
        </div>
      </li>
      <li className="mb-1 ms-3">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-white" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="true">
        * Orders
        </button>
        <div className="collapse show" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</Link></li>
          </ul>
        </div>
      </li>
      <li className="border-top my-3"></li>
      <li className="mb-1 ms-3">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-white" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="true">
        * Account
        </button>
        <div className="collapse show" id="account-collapse" >
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</Link></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
    </>
  )
}
