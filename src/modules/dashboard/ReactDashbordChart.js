
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle, ResponsiveContainer } from "recharts";
import axios from 'axios';

export default function ReactDashboardChart() {
  const [mydata, setdate] = useState([]);
  const [fv, ffunc] = useState([]);

  console.log(fv);
  const myapi = () => {
    axios.get('https://dummyjson.com/products').then((d) => {
      // console.log(d.data.products);
      setdate(d.data.products);
    })
  }

  useEffect(() => {
    myapi();
  }, []);

  const filterdate = (e) => {
    //  console.log(e.target.value);
    const b = mydata.filter((r) => {
      // ffunc(r.category===e.target.value);
      return r.category === e.target.value
    });
    ffunc(b);
    //  console.log(b);
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-6 text-center p-2'>
          <select className='form-select' onChange={filterdate}>
            {mydata.map((d) => {
              return <option>{d.category}</option>
            })}
          </select>
        </div>
        <div className="col-md-6 mt-2">
          <select className='form-select'>
            <option>mydata</option>
            <option>fv</option>
          </select>
        </div>
        <div className='col-12 bg-dark'>
          <ResponsiveContainer width={"100%"} height={600}>
            <BarChart data={fv}>

              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="rating"
                fill="red"
                activeBar={<Rectangle fill="blue" />}
              />
              <Bar
                dataKey="stock"
                fill="green"
                activeBar={<Rectangle fill="blue" />}
              />
              <Bar
                dataKey="weight"
                fill="lightgreen"
                activeBar={<Rectangle fill="green" stroke="orange" />}
              />
              <Bar
                dataKey="price"
                fill="green"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}






