import React,{useState} from 'react'
import { Link,useNavigate} from 'react-router-dom'

export default function Loginpage() {

 const [myform,setform] = useState({
      email : "",
      pass : ""
 });

 const mynav = useNavigate();

 const handleEmailId = (e) =>{
    setform({  ...myform,email : e.target.value});
}

const handlepassword = (e) => {
     //let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
     setform({  ...myform,pass : e.target.value});
  }

   const myvalidation = ()=>{
          if(myform.pass === "1#lohandilO")
          {
            alert("welcome");
            mynav("/dashboard");
          }
          else
          {
            alert("try again");
          }
        }

//  const regexfunc = () => {
//   let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
//   setform(regex);
// }

  return (
      <>
         <div className='container-fluid'>
          <div className="row ">
           <div className='container col-md-3 bg-light shadow mt-5'>
            <div className='container-fluid '>
              <section className='row  mt-5'>
                <div className='text-center mb-3'>
                  <img src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg" width={150} height={80} alt="nature " className='rounded-circle justify-content-center' />
                </div>
                {/* <div className="text-center">Login User</div> */}
                <h1 className="text-center">Login User</h1>
              </section>
              <section className="row mt-2">wea
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label"  >Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"   onInput={handleEmailId} value={myform.email}/>
                  {myform.email.length >= 1 ? <p className="text-success">username</p> : <p className="text-danger">username is blank</p> }
                </div>
              </section>
              <section className="row mt-2">
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" value={myform.pass} onInput={handlepassword}/>
                  {myform.pass.length === 0 ? <p className="text-danger">  blank password</p> : myform.pass.length <= "9" ?  <p className="text-warning"> weak paswword</p> : <p className="text-success">good password</p>}
                </div>
                
              </section>
              <div className='row'>                   
                    <section className='col-md-6'>
                      {myform.pass.length >= 9 ? <input type='checkbox'  /> : <input type='checkbox'  disabled/>}
                          <span className='ms-1'>Remember Me</span>
                    </section>
                    <section className='col-md-6 text-end'>
                         <span><Link to="forgotpassword">Forget password</Link></span>
                    </section>
              </div>
             
            <section className="row mt-2 mb-5">
              <div className="col-md text-center mt-5">
              {myform.pass.length >= 9 ?  <button type="submit" className="btn btn-primary" onClick={myvalidation} > Login</button> : ""}
               <button type="cancel" className="btn btn-danger ms-5" >cancel</button>
               <Link to="/new-registor-user"> <button  type="registor" className="btn btn-success m-5">New Registor User</button></Link>
              </div>
            </section>
            </div>
        </div>
      </div>
    </div >
</>
   
  )
}





