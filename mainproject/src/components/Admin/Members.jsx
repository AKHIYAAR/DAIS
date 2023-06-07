import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import AdminBar from './AdminBar'
import { useNavigate } from 'react-router-dom';

const Members = () => {
  var[user,setUser]=useState([])
  const [d, setD] = useState(false);
  const nav = useNavigate(); 
  useEffect(()=>{
    axios.get("http://localhost:4000/viewuser")
    .then((response)=>{
      console.log(response.data)
      setUser(user=response.data)
    })
    .catch((err)=>console.log(err))
  },[d])

  const del = (id) => {
    axios.delete("http://localhost:4000/delete/"+id)
    .then((res) => {
      alert("Deleted...");
      setD(!d);
    })
  }
  return (
    <div style={{
      display:"flex",
      flexDirection:'row',
    }} >
    <AdminBar/> 
    <div 
        style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          border:'1px solid black',
          marginTop:'5%',
          padding:'1rem',
        }}
    >
    <TableContainer  >
  <Table>
    <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight:'bolder' }} >Name</TableCell>
          <TableCell sx={{ fontWeight:'bolder' }} >E-mail</TableCell>
          <TableCell sx={{ fontWeight:'bolder' }} >DoB</TableCell>
          <TableCell sx={{ fontWeight:'bolder' }} >PhoneNumber</TableCell>
          <TableCell sx={{ fontWeight:'bolder' }} >Options</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {user.map((value,index)=>{
                return(
                    <TableRow key={index}>
                    <TableCell>{`${value.FirstName} ${value.SecondName} `}</TableCell>
                    <TableCell>{value.EmailId}</TableCell>
                    <TableCell>{value.Dob}</TableCell>
                    <TableCell>{value.PhoneNumber}</TableCell>
                    <TableCell>
                      <Button size='small' onClick={() => {
                          nav("/update/"+value._id)
                      }} >
                        Edit
                      </Button>
                      <Button size='small' onClick={() => {
                        del(value._id);
                      }} >
                        Delete
                      </Button>
                      <Button onClick={() => {
                        axios.post("http://localhost:4000/block/", {id:value._id})
                        .then((res)=> {
                          console.log(res);
                          alert("Blocked....")
                        })
                        .catch((err)=> {
                          console.log(err)
                        })
                      }} >
                        Block
                      </Button>
                    </TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
   
  </Table>
</TableContainer>
    </div>
    </div>
  );
}

export default Members;
