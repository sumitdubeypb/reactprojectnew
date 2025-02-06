// import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { decrement, increment, incrementByAmount, decrementByAmount, myadd } from "../reduxstore/actionlist";

// export default function AddToCart() {

//     const select = useSelector((state) => state.counter.value);
//     const abc = useDispatch();


//     const atc = useSelector((state) => state.card.cartvalue);

//     return (
//         <>
//             <div>atc</div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-6 border  text-center">
//                         {atc.map((p) => {
//                             return (
//                                 <>

//                                     <p></p>
//                                     <table class="table">

//                                         <tbody>
//                                             <tr>

//                                                 <td> <img src={p.images} alt="none" className="p-1" style={{ height: ' 20vh', width: '10vw' }} /></td>
//                                                 <td><h5>{p.title}</h5> <h3 className="text-warning">${p.price}</h3></td>

//                                                 <td><button className="primary rounded-circle p-2" onClick={() => abc(decrement())}>-</button><p className="m-1 border"></p><p className="border-bold p-2 ">{select}</p><button className="primary rounded-circle p-2" onClick={() => abc(increment())}>+</button></td>
//                                             </tr>

//                                         </tbody>
//                                     </table>
//                                 </>
//                             )
//                         }
//                         )}
//                     </div>
//                     <div className="col-md-3">
//                         <h3>Total Product</h3>
//                         <p ><input className='form-control' placeholder="~" /></p>

//                     </div>
//                     <div className="col-md-3">
//                         <h3>Total Price</h3>
//                         <p ><input className='form-control'  placeholder='$'  value={atc.price}/></p>
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <button className="btn btn-primary">COMPLETE ORDER</button>
//                                 <Link to="/dashboard/reduxpage"> <button className="btn btn-success">Back</button></Link>
//                             </div>
//                         </div>

//                     </div>
//                 </div>


//             </div>

//         </>
//     )
// }





import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrement, increment } from "../reduxstore/actionlist";

export default function AddToCart() {
    const count = useSelector((state) => state.counter.value);
    const cartItems = useSelector((state) => state.card.cartvalue);
    const dispatch = useDispatch();

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className="container">
            <h2>Cart</h2>
            <div className="row">
                <div className="col-md-6 border text-center">
                    {cartItems.length === 0 ? (
                        <p>No items in cart.</p>
                    ) : (
                        <table className="table">
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img src={item.images} alt={item.title} className="p-1" style={{ height: '20vh', width: '10vw' }} />
                                        </td>
                                        <td>
                                            <h5>{item.title}</h5>
                                            <h3 className="text-warning">${item.price}</h3>
                                        </td>
                                        <td>
                                           
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <div className="col-md-3">
                    <h3>Total Product</h3>
                    <input className="form-control" value={cartItems.length} readOnly />
                </div>
                <div className="col-md-3">
                    <h3>Total Price</h3>
                    <input className="form-control" value={`$${calculateTotalPrice(cartItems)}`} readOnly />
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <button className="btn btn-primary m-2">COMPLETE ORDER</button>
                            <Link to="/dashboard/reduxpage">
                                <button className="btn btn-success ml-2">Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}




