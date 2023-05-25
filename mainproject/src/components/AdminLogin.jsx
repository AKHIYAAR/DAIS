import React from 'react'
import {  Box, Button, TextField, Typography, colors,Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from "../logo/906343.png"

const Loginpage = () => {

  return (
    <div style={{ display:'flex', justifyContent:"center",width: "100%", height: "100%", alignItems:'center',alignContent:'center',textAlign:'center', }} >
         <Box sx={{borderRadius:1, borderColor:'red', border:" 2px solid black", width:'fit-content',padding:10, borderRadius:5, marginTop:'5%', backgroundColor:"rgba(255,255,255,0.8)",boxShadow:"rgba(0,0,0,0.7) -20px 0px 15px -3px  " }}>
        <Avatar src={logo} sx={{alignItems:'center',alignContent:'center', textAlign:'center',marginLeft:'40%',marginBottom:'0%', hieght:'50'}} />
        <Typography variant='h3' color="black" style={{marginLeft:"2%"}}>Admin</Typography>
        {/* <Typography variant='h6' color="black">Access</Typography><br /><br /> */}
        <TextField style={{ WebkitTextFillColor:"black" }} label='Email id' variant="filled" color="primary" ></TextField><br /><br />
        <TextField style={{ WebkitTextFillColor:"black" }} label='Password' variant="filled" color="primary" type="password"></TextField><br /><br />
        <Button variant="contained" style={{backgroundColor:"#AB0808",color:"white"}} ><b>Login</b></Button>

        </Box>
    </div>
  )
}

export default Loginpage