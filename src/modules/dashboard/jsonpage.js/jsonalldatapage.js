// import React, { useEffect } from 'react'
// import axios from 'axios'

// export default function jsonalldatapage() {
   
  
//   const alldata = () =>{
//     axios.get('http://localhost:3000/users').then((d) =>{
//          console.log(d.data);
//     })
//   }
//   useEffect(() =>{
//        alldata();
//   },[]);

//   return (
//     <>
     
//       <div>jsonalldatapage</div>
//     </>
//   )
// }




import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdDelete, MdOutlineRateReview, MdOutlineStreetview } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Jsonalldatapage() {
  const [user,setuser]=useState([])
    const alldata = ()=>{
        axios.get('http://localhost:4500/user').then((d)=>{
            console.log(d.data);
            setuser(d.data);
        })
    }

    useEffect(()=>{
        alldata();
    },[]);


const deleterecord = (id)=>
{
  axios.delete(`http://localhost:4500/user/${id}`).then((d)=>{
    console.log(d.data);
    alldata();
   
})
}


  return (
    <table className="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">FullName</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Password Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((d,sn=1) => {
                        return (
                            <tr key={d.id}>
                                <th scope="row">{d.id}</th>
                                <td>{d.fullname}</td>
                                <td>{d.email}</td>
                                <td>{d.dob}</td>
                                <td>{d.gender}</td>
                                <td>{d.pass===d.cpass ? <span className="text-success">Matched</span> : <span className="text-danger">Not Matched</span>}</td>
                                <td className='text-end'>
                                    <span className="badge text-bg-primary p-2"><MdOutlineStreetview /></span>
                                    <Link to={'editpage/'+d.id} className="badge text-bg-warning ms-2 p-2"><MdOutlineRateReview /></Link>
                                    <span className="badge text-bg-danger ms-2 p-2" onClick={()=>deleterecord(d.id)}><MdDelete /></span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
  )
}

export default Jsonalldatapage