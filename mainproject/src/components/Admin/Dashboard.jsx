import React from 'react';
import {Box, Grid,Card, CardContent,Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AdminBar from './AdminBar'



const Dashboard = () => {
  return (
    <div><AdminBar/> 
    <div style={{padding:"100px"}}>
        
        <Box component='span'  sx={{ display:'flex', transform: 'scale(0.9)',gap: '100px'}}>
       

<Card sx={{ minWidth: 300 }}>
  <CardContent>
    <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
      TOTAL USERS
    </Typography>
    <Typography variant="h5">10</Typography>
  </CardContent>
  <Grid container justifyContent="flex-end" alignItems="center">
    <Grid item>
      <PersonIcon sx={{ fontSize: 40, color: '#9BABB8' }} />
    </Grid>
  </Grid>
</Card>

        <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
          TOTAL BOOKS
        </Typography>
        <Typography variant="h5">20</Typography>
       
        </CardContent >
        <Grid container justifyContent="flex-end" alignItems="center">
    <Grid item>
    <MenuBookIcon  sx={{ fontSize: 40 }}  style={{ color: '#9BABB8' }}/>
    </Grid>
  </Grid>
        </Card>
        </Box>
      
      </div>
    </div>
  );
}

export default Dashboard;
