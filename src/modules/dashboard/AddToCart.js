import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount,decrementByAmount, myadd } from "../reduxstore/actionlist";

export default function AddToCart() {

    const select = useSelector((state) => state.counter.value);
     const abc = useDispatch();
    
       
      

    
    const atc = useSelector((state) => state.card.cartvalue);
    return (
        <>
            <div>atc</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 border  text-center">
                        {atc.map((p) => {
                            return (
                                <>
                                   
                                    <p></p>
                                    <table class="table">
                                      
                                        <tbody>
                                            <tr>
                                               
                                                <td> <img src={p.images} alt="none" className="p-1" style={{ height: ' 20vh', width: '10vw' }} /></td>
                                                <td>{p.title} <h3 className="text-warning">${p.price}</h3></td>
                                               
                                                <td><button className="primary rounded-circle" onClick={()=>abc(decrement())}>-</button><p className="m-1 border"></p>{select}<p></p><button className="primary rounded-circle" onClick={() => abc(increment())}>+</button></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </>
                            )
                        }
                        )}
                    </div>
                    <div className="col-md-6 border ">
                         <h3>Total</h3>
                        <p> $<input/></p>
                        <Link to="/dashboard/reduxpage"> <button >Back</button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}
