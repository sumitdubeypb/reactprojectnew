import React from 'react'
import { Link } from 'react-router-dom'
export default function Jsonlogin() {
   
   return(
   <>
       < div className='container-fluid'>
         <div className="row" >
           <div className='container col-md-6 bg-light shadow mt-5'>
             <div className='container-fluid '>
               <section className='row  mt-5' >
                 <div className='text-center mb-3'>
                   <img src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg" width={150} height={80} alt="nature " className='rounded-circle justify-content-center' />
                 </div>
                 {/* <div className="text-center">Login User</div> */}
                 <h1 className="text-center">Json Registor User</h1>
               </section>
               <section className="row mt-2">
                 <div className="col-md-6 mb-3">
                   <label for="exampleInputEmail1" class="form-label">Email address</label>
                   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                   <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                 </div>
                 <div className="col-md-6 mb-3">
                   <label  class="form-label">Full Name</label>
                   <input type="text" class="form-control"/>
                 </div>
               </section>
               <section className="  row mt-2">
                 <div className="col-md-6">
                   <label class="form-label">DOB</label>
                   <input type="date" class="form-control" />
                 </div>
                 <div class="col-md-6 mb-3">
                   <label class="form-label">Gender</label><br />
                   <div class="form-check form-check-inline">
                     <input class="form-check-input" type="radio" name="gender" value="male" />
                     <label class="form-check-label" >Male</label>
                   </div>
                   <div class="form-check form-check-inline">
                     <input class="form-check-input" type="radio" name="gender" value="female" />
                     <label class="form-check-label" >Female</label>
                   </div>
                 </div>
                 
               </section>
 
               <section className="row mt-2">
                 <div className="col-md-6 mb-3">
                   <label for="exampleInputPassword1" class="form-label">Password</label>
                   <input type="password" class="form-control" id="exampleInputPassword1" />
                 </div>
                 <div className="col-md-6 mb-3">
                   <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                   <input type="password" class="form-control" id="exampleInputPassword1" />
                 </div>
               </section>
              
               <section className="row mt-2 mb-5">
                 <div className="col text-center ">
                 <button type="submit" class="btn btn-primary">Registor</button>
                  <Link to="/"> <button type="cancel" class="btn btn-danger ms-5">cancel</button></Link>
                 </div>
               </section>
 
 
             </div>
           </div>
         </div>
       </div>
 
     </>
   )
 }
 
 
 
 
