import React from 'react'
import Header from "../sharecomponent/Header";
import Footer from "../sharecomponent/Footer";
import Sidenav from "../sharecomponent/Sidenav";
import {Outlet} from "react-router-dom";
export default function Mainpage() {
  return (
    <>
     <div> <Header/></div>
      <div className="container-fluid  border page">
        <div className="row ">
          <div className="col-md-2 ">
            <Sidenav></Sidenav>
          </div>
          <div className="col-md-10  border  ">
            <Outlet>outlet</Outlet>
         </div>
       
      </div>
      </div>
      <Footer />


    </>
  )
}
