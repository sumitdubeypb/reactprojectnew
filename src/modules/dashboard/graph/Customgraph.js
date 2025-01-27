import React,{useState,useEffect, Fragment} from 'react'
import axios from 'axios';
// import {ResponsiveContainer,XAxis} from 'recharts'

export default function Customgraph() {
   const[a,b] = useState([]);
  // const user = [{
  //   id: 1,
  //   name: "Rumit",
  //   salary: 302,
  // },
  // {
  //   id: 2,
  //   name: "Deep",
  //   salary: 607,
  // },
  // {
  //   id: 3,
  //   name: "Rahul",
  //   salary: 805,
  // },
  // {
  //   id: 4,
  //   name: "Rit",
  //   salary: 850,
  // },
  // {
  //   id: 5,
  //   name: "Ri",
  //   salary: 500,
  // },
  // {
  //   id: 5,
  //   name: "Ri",
  //   salary: 500,
  // },
 
  // ]
  const axiosApifunc = () => {
    axios.get('https://dummyjson.com/products').then((d) => {
        b(d.data.products);
        // console.log(d);
        // console.log(d.data);
        console.log(d.data.products);
    })
}

useEffect(() => {
    axiosApifunc();
}, []);

  return (
    <Fragment >
      <div>customgraph</div>
      
        <div className="row bg-dark mb-5">
         
          <div className="col-md-12">
           
            <ul className="empsalary mt-5 " >
          
              {a.map((p) => {
                return (
                  <>
                  <li className="border m-2 price" style={{ height: `${parseInt(p.price)}vh`}}>{parseInt(p.price)}</li>
                  {/* <li className="border stock m-2" style={{ height: `${parseInt(p.stock)}vh`}}>{parseInt(p.stock)}</li> */}
                  {/* <li className="border m-2 rating" style={{ height: `${parseInt(p.rating)}vh`}}>{parseInt(p.rating)}</li> */}
                  {/* <li className="border weight m-2" style={{ height: `${parseInt(p.weight)}vh`}}>{parseInt(p.weight)}</li> */}
                  </>
                )
              })}
            </ul>
            </div>
        </div>
        
        
    </Fragment>

  )
}

