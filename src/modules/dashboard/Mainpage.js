import React from 'react'
import Header from "../sharecomponent/Header";
import Footer from "../sharecomponent/Footer";
import Sidenav from "../sharecomponent/Sidenav";
export default function Mainpage() {
  return (
    <>
    <div className="container-fluid"> 
      <div className="row">
        <div className="col-12 mt-5">
          <div><Header /></div>
          <div>mainpage</div>
          <div> <Sidenav /></div>
        </div>
       </div>
       <div className="row">
       <div className="col-12 mt-1">
          <div><Footer /></div>
      </div>
      </div>
      </div>
    </>
  )
}
