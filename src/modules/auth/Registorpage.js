import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function RegisterPage() {
  const { register, handleSubmit,watch, formState: { errors } } = useForm();

  const mySubmit = (data) => {
    console.log(data);
  };
  const password = watch('password');
  return (
    <>
      <form onSubmit={handleSubmit(mySubmit)}>
        <div className='container-fluid'>
          <div className="row">
            <div className='container col-md-6 bg-light shadow mt-5'>
              <div className='container-fluid'>
                <section className='row mt-5'>
                  <div className='text-center mb-3'>
                    <img src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg" width={150} height={80} alt="nature" className='rounded-circle justify-content-center' />
                  </div>
                  <h1 className="text-center">New Register User</h1>
                </section>
                <section className="row mt-2">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" {...register('email', { required: true, pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/i })} />
                    {errors.email && <span className="text-danger">Invalid email</span>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" name="fullname" {...register('fullname', { required: true, minLength: 5, pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)?$/})} />
                    {errors.fullname?.type==="required" && <span className="text-danger">Invalid name</span>}
                    {errors.fullname?.type==='minLength' && <p className='text-warning'>minimum 5 charec</p>}
                    {errors.fullname?.type==='pattern' && <p className='text-danger'>pattern don't match</p>}
                  </div>
                </section>
                <section className="row mt-2">
                  <div className="col-md-6">
                    <label className="form-label">DOB</label>
                    <input type="date" className="form-control" name="dob" {...register('dob', { required: true })} />
                    {errors.dob && <span className="text-danger">DOB is required</span>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Gender</label><br />
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" value="male" {...register('gender', { required: true })} />
                      <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" value="female" {...register('gender', { required: true })} />
                      <label className="form-check-label">Female</label>
                    </div>
                    {errors.gender && <span className="text-danger">Gender is required</span>}
                  </div>
                </section>
                <section className="row mt-2">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" {...register('password', { required: true })} />
                    {errors.password && <span className="text-danger">Password is required</span>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name="confirmpassword" {...register('confirmpassword', { required: true , validate: (value) => value === password || "Passwords do not match"})} />
                    {errors.confirmpassword?.type==="required" && <span className="text-danger">Confirmation is required</span>}
                        {errors.confirmpassword?.type==="validate" && <span className="text-danger">{errors.confirmpassword.message}</span>}
                  </div>
                </section>
                <section className="row mt-2 mb-5">
                  <div className="col text-center">
                    <Link to="/"> <button type="submit" className="btn btn-primary">Register</button></Link>
                    <Link to="/"><button type="button" className="btn btn-danger ms-5">Cancel</button></Link>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
  }