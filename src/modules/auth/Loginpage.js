// import React,{useState} from 'react'
// import { Link,useNavigate} from 'react-router-dom'

// export default function Loginpage() {

//  const [myform,setform] = useState({
      
//       pass :""
//  });

//  const mynav = useNavigate();




//  const handlepassword = (e) => {
//      //let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
//      setform({pass : e.target.value});
//    }

//    const myvalidation = ()=>{
//           if(myform.pass === "1234567890")
//           {
//             alert("welcome");
//             mynav("/mainpage");
            
//           }
//           else
//           {
//             alert("try again");
          
//           }
//         }

// //  const regexfunc = () => {
// //   let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
// //   setform(regex);
// // }

//   return (
//       <>
//          <div className='container-fluid'>
//           <div className="row ">
//            <div className='container col-md-3 bg-light shadow mt-5'>
//             <div className='container-fluid '>
//               <section className='row  mt-5'>
//                 <div className='text-center mb-3'>
//                   <img src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg" width={150} height={80} alt="nature " className='rounded-circle justify-content-center' />
//                 </div>
//                 {/* <div className="text-center">Login User</div> */}
//                 <h1 className="text-center">Login User</h1>
//               </section>
//               <section className="row mt-2">
//                 <div className="mb-3">
//                   <label for="exampleInputEmail1" class="form-label"  >Email address</label>
//                   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onclick={myform.email} onInput={handleEmailId} value={myform.email}/>
//                   <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//               </section>
//               <section className="row mt-2">
//                 <div className="mb-3">
//                   <label for="exampleInputPassword1" class="form-label">Password</label>
//                   {/* if({myform.pass.length}>=9){ }  */}
//                   <input type="password" class="form-control" id="exampleInputPassword1" value={myform.pass} onInput={handlepassword}/>
//                 </div>
                
//               </section>
//               <div className='row'>                   
//                     <section className='col-md-6'>
//                          <input type='checkbox' />
//                           <span className='ms-1'>Remember Me</span>
//                     </section>
//                     <section className='col-md-6 text-end'>
//                          <span><Link to='#'>Forget password</Link></span>
//                     </section>
//               </div>
             
//             <section className="row mt-2 mb-5">
//               <div className="col-md text-center mt-5">
//               {/* {myform.pass.length >=9  ?  : " "}, */}
//                 <button type="submit" class="btn btn-primary" onClick={myvalidation} > Login</button> 
                
//                 <button type="cancel" class="btn btn-danger ms-5">cancel</button>
//                 <button type="registor" class="btn btn-success m-5">New Registor User</button>
//               </div>
//             </section>


//           </div>
//         </div>
//       </div>
//     </div >
// </>
   
//   )
// }






import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Myloginpage() {
  const mynav = useNavigate();
  const [myform,setmyform]=useState({
    email:null,
    pass:""
  });


  const emailid =(e)=>{
    console.log(e.target.value);
    // setmyform({
    //   email:e.target.value
    // });
  }
  
  const passupdate =(e)=>{
    console.log(e.target.value);
    setmyform({
      pass:e.target.value
    });
  }

const myvalidation = ()=>{
      if(myform.pass==="1234567890")
      {
        alert("welcome");
        mynav("/mainpage");
      }
      else
      {
        alert("try again");
      }

  
}

  return (
 
    <div className="container-fluid mt-3">
      <div className="row justify-content-center">
        <div className="col-md-4 bg-light p-4 shadow">
          <div className='container-fluid'>
          <div className='row'>
              <div className='col-12 p-3 text-center'>
                <img src="photo/img1.jpg" width={80} height="80" alt='mylogo' className='rounded-circle'></img>
                <h2 className='mt-3'>Login User</h2>
              </div>
            </div>
            <div className="row">
              <section className='col-12'>
                <div class="mb-3">
                  <label class="form-label">Email address</label>
                  <input type="text" class="form-control" value={myform.email} onInput={emailid}/>
                </div>
              </section>
              <section className='col-12'>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input type="text" class="form-control" value={myform.pass} onInput={passupdate}/>
                  {myform.pass==="" ? <p className='text-danger'>password is blank</p> : myform.pass.length<=10 ? <p className='text-warning'>password week</p> : myform.pass.length>=10 ? <p className='text-success'>password strong</p>: ""}
                </div>
              </section>
            </div>            
            <div className='row'>                   
              <section className='col-md-6'>
                <input type='checkbox' disabled={myform.pass.length>=10} checked={myform.pass.length>=10}/>
                <span className='ms-1'>Remember Me</span>
              </section>
              <section className='col-md-6 text-end'>
                <span><Link to='#'>Forget password</Link></span>
              </section>
            </div>
            <div className='row'>
              <div className='col-12 p-3 text-center'>
                {myform.pass.length>=10 ?  
                <button className='btn btn-success' onClick={myvalidation}>login</button> : ""}
                <button className='btn btn-danger ms-3'>cancel</button>
                <Link to="registor" className='btn btn-primary ms-3'>New Registor</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Myloginpage