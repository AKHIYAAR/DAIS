import React, { useState } from 'react'
import {  Box, Button, TextField, Typography, colors, } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from "axios"


const Loginpage = () => {
  const [data, setData]  = useState({
    EmailId:'',
    Password:''
  })
  
  const login = () => {
    axios.post("http://localhost:4000/login", data)
    .then((res) => {
      console.log(res.status)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handler = (e) => {
    setData((data) => ({ ...data, [e.target.name]:e.target.value }));
  }

  

  return (
    <div style={{ display:'flex', justifyContent:"center",width: "100%", height: "100%", alignItems:'center',alignContent:'center',textAlign:'center', }} >
        <Box sx={{borderRadius:1, borderColor:'red', border:" 2px solid black", width:'fit-content',padding:10, borderRadius:5, marginTop:'5%', backgroundColor:"rgba(255,255,255,0.8)",boxShadow:"rgba(0,0,0,0.7) -20px 0px 15px -3px  " }}>
        <Typography variant='h3' color="black">Login</Typography><br /><br />
        <TextField style={{ WebkitTextFillColor:"black" }} onChange={handler} name='EmailId' value={data.EmailId} label='Email id' variant="filled" color="error" ></TextField><br /><br />
        <TextField style={{ WebkitTextFillColor:"black" }} onChange={handler} name="Password" value={data.Password} label='Password' variant="filled" color="error" type="password"></TextField><br /><br />
        <Button variant="contained" style={{backgroundColor:"#AB0808",color:"white"}} onClick={login} ><b>Login</b></Button>
        <br /><br /><Typography style={{fontStyle:"italic",color:"black"}}>Do you have an account?<Button ><Link to={"/signup"} style={{color:"black", textDecoration:"none", fontWeight:'bolder',marginTop:"-2%"}} ><b>Sign in</b></Link></Button></Typography>

        </Box>
    </div>
  )
}

export default Loginpage