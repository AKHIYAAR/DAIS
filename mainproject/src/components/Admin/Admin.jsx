import React from 'react';
import './Admin.css';
import './Widgets.css';
import './Sidebar.css';
import { Box } from '@mui/material';
import { Widgets } from '@mui/icons-material';
import AdminBar from './AdminBar'


const admin = () => {
  return (
    <div><AdminBar/> 
    <div style={{paddingTop:'70px'}}>
    <Box>
    <div  className='home'>  
        
      <div className="homeContainer"></div>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <div className="widgets"></div>
      <Widgets  type="Member"/>
      <Widgets type="User"/>
      <Widgets  type="Book"/>
      
    
      </div>
      </Box>
      </div>
    </div>
  );
}

export default admin;
