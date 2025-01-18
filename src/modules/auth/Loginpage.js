import React from 'react'
import { Link } from 'react-router-dom'

export default function Loginpage() {
  return (
      <>

         < div className='container-fluid'>
          <div className="row " >
           <div className='container col-md-3 bg-light shadow mt-5'>
            <div className='container-fluid '>
              <section className='row  mt-5' >
                <div className='text-center mb-3'>
                  <img src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg" width={150} height={80} alt="nature " className='rounded-circle justify-content-center' />
                </div>
                {/* <div className="text-center">Login User</div> */}
                <h1 className="text-center">Login User</h1>
              </section>
              <section className="row mt-2">
                <div className="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
              </section>
              <section className="row mt-2">
                <div className="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
              </section>
              <div className='row'>                   
                   <section className='col-md-6'>
                         <input type='checkbox' />
                          <span className='ms-1'>Remember Me</span>
                    </section>
                    <section className='col-md-6 text-end'>
                         <span><Link to='#'>Forget password</Link></span>
                    </section>
            </div>
             
               <section className="row mt-2 mb-5">
              <div className="col-md text-center mt-5">
                <button type="submit" class="btn btn-primary">Login</button>
                <button type="cancel" class="btn btn-danger ms-5">cancel</button>
                <button type="cancel" class="btn btn-success ms-5">New Registor User</button>
              </div>
            </section>


          </div>
        </div>
      </div>
    </div >
</>
   
  )
}
