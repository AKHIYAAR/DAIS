import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        <Box sx={{borderRadius:1, borderColor:'red', border:" 2px solid black", width:'fit-content',padding:3, borderRadius:10, marginTop:'5%', backgroundColor:"rgba(255,255,255,.7)",marginLeft:"33%",boxShadow:"rgba(0,0,0,0.7) -20px 0px 15px -3px  " }}>
        <Typography variant='h3' color="black"><b>Learn More With Your Vibes</b><br /></Typography><br />
        <Typography variant='h5'>Who Needs a Librarian and Cataloger<br />When You Have Google and Internet?<br />Well, Who Needs a Teacher When You<br />Have Wikipedia? And, Who Needs a<br />Doctor When You Have WebMD?<br /><br />Just as the Wikipedia Doesn't Replace the<br />Teacher, and WebMD Doesn't Replace the<br />Doctor, in the Same Way Google Search<br />and Internet Doesn't Replace the<br />Librarian and Cataloger.</Typography>
        <Button variant="contained" style={{backgroundColor:"snow",color:"black",marginRight:"26%",marginTop:"5%"}}><Link to={'/login'} style={{color:"Black",textDecoration:"none"}}><b>Start your journey</b></Link></Button>
        <Button variant="contained" style={{backgroundColor:"red",color:"snow",marginLeft:"30%",marginTop:"-10%"}}><b>Close</b></Button>
        </Box>
    </div>
  )
}

export default Homepage