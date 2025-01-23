import React,{useState,useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

export default function ReactPagination() {
    const[a,b] = useState([]);

    const getapidata = () => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((d) =>{return d.json();}).then((r) => {return b(r);})
    }

    useEffect(() =>{
        getapidata();
    })
     
const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'userId', headerName: 'UserId', width: 70 },
      { field: 'title', headerName: 'Title', width: 500},
      {field: 'body',headerName: 'Body Text',  type: 'number',width: 700},
      {field: 'button',headerName: 'Button',description: 'This column has a value getter and is not sortable.',sortable: false,width: 160,valueGetter: (value, row) => `${row.id || ''} ${row.userId || ''}`},
    ];
    const paginationModel = { page: 0, pageSize: 5 };

  return (
    <>
    <div>ReactPagination</div>
       <Paper sx={{ height: 600, width: '100%', backgroundColor: 'darkgray' }}>
        <DataGrid
          rows={a}
         columns={columns}
         initialState={{ pagination: { paginationModel } }}
         pageSizeOptions={[5, 10,15,20,40,60,80,100]}
         checkboxSelection
         sx={{ border: 1}}     
          />
       </Paper>
       
  </>
  )
}



  
// //   const rows = [
// //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
// //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
// //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
// //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// //   ];
// //   const paginationModel = { page: 0, pageSize: 5 };
  


