import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from './SideBar'

const Loginpage = () => {
  const nav = useNavigate()
  const [data, setData] = useState({
    EmailId: '',
    Password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const { EmailId, Password } = data;
    console.log({
      EmailId,
      Password,
    });
    fetch('http://localhost:4000/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        EmailId,
        Password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.status === 222){
          return nav("/admin");
        }
        if (data.status === "ok") {
          alert("Login Successful")
          window.localStorage.setItem("token", data.data)
          window.location.href = "/viewbook"
        }
        else {
          alert("Please Check the E-mail or Password")
        }
      });
  };

  return (
    <div> <Sidebar/>
    <div style={{ display: 'flex', justifyContent: "center", width: "100%", height: "100%", alignItems: 'center', alignContent: 'center', textAlign: 'center', }} >
      <form onSubmit={handleSubmit}>
        <Box sx={{ borderRadius: 1, borderColor: 'red', border: " 2px solid black", width: 'fit-content', padding: 10, borderRadius: 5, marginTop: '5%', backgroundColor: "rgba(255,255,255,0.8)", boxShadow: "rgba(0,0,0,0.7) -20px 0px 15px -3px  " }}>
          <Typography variant='h3' color="black">Login</Typography><br /><br />
          <TextField style={{ WebkitTextFillColor: "black" }} onChange={(e) => setData({ ...data, EmailId: e.target.value })} name='EmailId' value={data.EmailId} label='Email id' variant="filled" color="error" ></TextField><br /><br />
          <TextField style={{ WebkitTextFillColor: "black" }} onChange={(e) => setData({ ...data, Password: e.target.value })} name="Password" value={data.Password} label='Password' variant="filled" color="error" type="password"></TextField><br /><br />
          <Button variant="contained" style={{ backgroundColor: "#AB0808", color: "white" }} type="submit"><b>Login</b></Button>
          <br /><br /><Typography style={{ fontStyle: "italic", color: "black" }}>Do you have an account?<Button ><Link to={"/signup"} style={{ color: "black", textDecoration: "none", fontWeight: 'bolder', marginTop: "-2%" }} ><b>Sign in</b></Link></Button></Typography>
        </Box>
      </form>
    </div>
    </div>
  )
}

export default Loginpage
