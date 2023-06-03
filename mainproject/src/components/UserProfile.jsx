import { Box ,Avatar, Paper, Typography } from '@mui/material'
import React from 'react'
import SideBar from './SideBar'
const UserProfile = () => {
  return (
    <div>
         <div> <SideBar/>
       <Box sx={{borderRadius:1, borderColor:'red', border:" 2px solid black",width:'fit-content', padding:3, borderRadius:0, marginTop:'5%', backgroundColor:"rgba(255,255,255,.7)",marginLeft:"33%",boxShadow:"rgba(0,0,0,0.7) -20px 0px 15px -3px  " }}>
            <Avatar align src='user'/><br />
          
            <Paper  elevation={3} variant="outlined" style={{width:250}} ><Typography align='left'>First Name : </Typography></Paper><br />
            <Paper elevation={3} variant="outlined" style={{width:250,alignContent:"right"}} ><Typography align='left'>Second Name : </Typography></Paper><br />
            <Paper elevation={3} variant="outlined" style={{width:250,alignContent:"right"}} ><Typography align='left'>Age  : </Typography></Paper><br />
            <Paper elevation={3} variant="outlined" style={{width:250,alignContent:"right"}} ><Typography align='left'>DOB : </Typography></Paper><br />
            <Paper elevation={3} variant="outlined" style={{width:250,alignContent:"right"}} ><Typography align='left'>Second Name : </Typography></Paper><br />

       </Box>
    </div>
    </div>
  )
}

export default UserProfile
