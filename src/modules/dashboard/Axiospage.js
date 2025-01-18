import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Axiospage() {
    const [a, b] = useState([])
    const axiosApifunc = () => {
        axios.get('https://dummyjson.com/products').then((d) => {
            b(d.data.products);
            // console.log(d);
            console.log(d.data);
            // console.log(d.data.carts);
        })
    }

    useEffect(() => {
        axiosApifunc();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div>AxiosPage......</div>
                    <div className="col-12">
                        <input type="button" className="btn btn-success btn-outline-warning" value="Api call"  onClick={axiosApifunc} />
                    </div>
                    {a.map((d) => {
                        return (
                          <div className="card col-md-2 mt-2 m-1  play p-1" >
                                <h5 className="card-title">ID : {d.id}</h5>
                                
                                <img src={d.images} className="card-img-top" alt="..."  height={100}/>
                                <div classNameName="card-body">
                                <h5 className="card-title">{d.title}</h5>
                                 <h5 className="card-title text-danger">Price : {d.price}</h5>
                                <h5 className="card-title">Discount % : {d.discountPercentage}</h5>
                                <h5 className="card-title text-warning">Rating : {d.rating}</h5>
                                <Link to={`details/`+ d.id} className="btn btn-primary">View All Details</Link>
                                </div>
                            </div>
            
                        )
                    })
                    }
                </div>
                  </div>

           

        </>
    )
}

