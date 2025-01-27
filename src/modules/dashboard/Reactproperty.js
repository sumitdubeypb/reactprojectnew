import React,{useState,useEffect} from 'react'
import { PiGoogleDriveLogoBold } from "react-icons/pi";
import {Link} from 'react-router-dom'
import mydata from './App.json';
// import { FcGoogle } from "react-icons/fc";
// import { FaInstagramSquare } from "react-icons/fa";



export default function Reactproperty() {

    const [prop,propfc]=useState("this is ");
    const [locaId,setlocaId]=useState([]);

    // const clearText = () => {
    //     let newText=" ";
    //       profc(newText);
    //    }
    const [a,b]=useState(25);

    const handleOnChange = (e) =>{
        propfc(e.target.value);
        if(e.target.value.length>=20){
          b(60);
        }else{
          b(25);
        }
    }

    // useEffect(()=>{
    //   setlocaId(JSON.parse(localStorage.getItem("mydata")));
    //           },[])
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md">
          <input value={prop} size={a} onChange={handleOnChange} ></input>
          </div>
        </div>
      </div>
      <h3>Total App : {mydata.length }</h3>
      
        <div className="row border">
        {mydata.map((e) => {
          {/* console.log(mydata); */}
                    return (
                        <div className='col-2'>
                            <Link to={e.applink}>
                                <div className='card text-center bg-info  m-2'>
                                  
                                    <span><img src={e.appimg} width={50} alt="google" /></span>
                                   {/* <h2> {e.appicon}< FaInstagramSquare/></h2> */}
                                    <h3>{e.appname}</h3>
                                    <h4>No:{e.appcode}</h4>
                                    
                                </div>
                            </Link>
                        </div>
                    )
                })}
          {/* <div className="col-2">
            <div className="card bg-warning text-center">
              <h1>< PiGoogleDriveLogoBold/> </h1>
              <span>drive</span>
              <span>No:240</span>
          </div> */}
          <div className="card bg-warning text-center">
              <h1>< PiGoogleDriveLogoBold/> </h1>
              <span>drive</span>
              <span>No:240</span>
          </div>
        </div>
        {/* </div> */}
    
   
    </>
  )
}
