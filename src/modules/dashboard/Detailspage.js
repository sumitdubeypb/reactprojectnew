

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'


function Detailspage() {

  const navigate = useNavigate();
  const { id } = useParams();
  const [a, b] = useState([]);

  const myapifunc = () => {
    axios.get(`https://dummyjson.com/products/${id}`).then((d) => {
      console.log(d.data);
      b(d.data);

    })
  }

  useEffect(() => {
    myapifunc();
  }, []);



  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-5 border'>
          <img src={a.images} alt="sdfsd" width={400} height={500} />
        </div>
        {a.id === 22 || a.id === 25 ? <div className='col-md-7 bg-danger border'>
          <h1> id: {a.id}</h1>
          <h2>{a.title}</h2>
          <p>{a.description}</p>
          <h4 className="card-title ">Category : {a.category}</h4>
          <h5 className="card-title text-danger">Price : {a.price}</h5>

          <h5 className="card-title">Discount % : {a.discountPercentage}</h5>
          <h5 className="card-title text-warning">Rating : {a.rating}</h5>
          <h5 className="card-title">Stock : {a.stock}</h5>
          <h5 className="card-title">Tags : {a.tags}</h5>
          <button className="btn btn-primary m-4 " onClick={() => navigate(-1)}>Back</button>
        </div> :
          <div className='col-md-7 border'>
            <h1> id: {a.id}</h1>
            <h2>{a.title}</h2>
            <p>{a.description}</p>
            <h4 className="card-title ">Category : {a.category}</h4>
            <h5 className="card-title text-danger">Price : {a.price}</h5>

            <h5 className="card-title">Discount % : {a.discountPercentage}</h5>
            <h5 className="card-title text-warning">Rating : {a.rating}</h5>
            <h5 className="card-title">Stock : {a.stock}</h5>
            <h5 className="card-title">Tags : {a.tags}</h5>
            <button className="btn btn-primary m-4 " onClick={() => navigate(-1)}>Back</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Detailspage;