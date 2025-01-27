
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import { printcard } from '../reduxstore/MycardlistSlice.js';


import Updateincrement from '../dashboard/Updateincrement.js';

export default function ReduxPage() {
    const [a, b] = useState([])
    const { id } = useParams();


    const axiosApifunc = () => {
        axios.get('https://dummyjson.com/products').then((d) => {
            b(d.data.products);
            console.log(d.data);
        
        })
    }

    const axiosApifuncid = () => {
        axios.get(`https://dummyjson.com/products/${id}`).then((d) => {
            b(d.data.products);
            // console.log(d);
            console.log(d.data);
            // console.log(d.data.carts);
        })
    }

    useEffect(() => {
        axiosApifunc();
    }, []);


    // const abc = useDispatch();
    const ac = useSelector((state) => state.card.cardvalue);
    const dispatch = useDispatch();
    console.log(ac);
    return (
        <>
            <div>ReduxPage</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 border">
                        <Updateincrement />
                    </div>
                    <div className="col-md-6 border">
                        <p>card......</p>
                        <p>{ac}</p>
                        <input type="button" className="btn btn-outline-warning  bg-success" value="cardUpdae" onClick={() => dispatch(printcard())} />
                    </div>
                    <div className="row border">
                        <Updateincrement />
                    </div>

                    <div className="row border">
                        {a.map((d) => {
                            return (
                                <div className="card col-md-3 mt-2 p-3  play p-1" >
                                    <h5 className="card-title">ID : {d.id}</h5>

                                    <img src={d.images} className="card-img-top" alt="..." height={100} />
                                    <div classNameName="card-body">
                                        <h5 className="card-title">{d.title}</h5>
                                        <h5 className="card-title text-danger">Price : {d.price}</h5>
                                        <h5 className="card-title">Discount % : {d.discountPercentage}</h5>
                                        <h5 className="card-title text-warning">Rating : {d.rating}</h5>
                                        <button className="btn btn-outline-primary" onClick>Details</button>
                                        <Link to={`details/` + d.id} className="btn btn-outline-danger m-2">Add to Cart</Link>
                                    </div>
                                </div>

                            )
                        })
                        }
                    
                    </div>


                </div>
            </div>





        </>
    )
}
