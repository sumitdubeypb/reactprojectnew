import React,{useEffect,useState} from 'react'

export default function FeatchApipage() {
  const[a,b]=useState([]);
  const getdataapi = () => { fetch('https://jsonplaceholder.typicode.com/posts').then((d) => { return d.json();}).then((r)=>{b(r)}) };
  useEffect(() =>{ getdataapi(); },[])

  // const getdataapi = () => { fetch('https://jsonplaceholder.typicode.com/posts').then((response) => { if (!response.ok) { throw new Error('Network response was not ok'); } return response.json(); }).then((data) => { console.log(data); }).catch((error) => { console.error('There was a problem with the fetch operation:', error); }); }; useEffect(() => { getdataapi(); }, []);
  
  return (
    <>
       <div>FeatchApipage</div>

       <table className="table border-primary  table-bordered ">
  <thead>
    <tr>
    <th scope="col">sno</th>
     <th scope="col">userId</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">Body text</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody >
    {a.map((d,sn=0) =>{
     return (
    <tr  key={d.id}>
      <th scope="row">{++sn}</th>
      <td>{d.userId}</td>
      <td>{d.id}</td>
      <td>{d.title}</td>
      <td>{d.body}</td>
      <td className="text-end">
         <span className="badge rounded-pill text-bg-danger p-2 ">View</span>
         <span className="badge rounded-pill text-bg-warning ms-2 p-2">Edit</span>
         <span className="badge rounded-pill text-bg-info ms-2 pd-2">Delete</span>
        
      </td>
    </tr>
     )
    })
  }
      </tbody>
</table>
    </>
  )
}






