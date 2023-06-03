import React from 'react';
import { Box, Card, CardContent, Divider, IconButton, Typography, InputBase, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import SearchIcon from '@mui/icons-material/Search';
import Book from './logo/Book.jpg'
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar'

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/viewbook')
      .then((response) => {
        console.log(response.blog);
        setBlogs(response.data);
      })
      .catch((err) => console.log(err));
  }, [searchQuery, navigate]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBlogs = blogs.filter((blog) => {
    const title = blog.title ? blog.title.toLowerCase() : '';
    const author = blog.author ? blog.author.toLowerCase() : '';
    const query = searchQuery.toLowerCase();
    return title.includes(query) || author.includes(query);
  });
  

  return (
    <div><Sidebar/>
    <div style={{ padding:'10vh' }}>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
          {/* searchbar */}
          <div style={{ display: 'flex', alignItems: 'center', height: '70%', width: '30vw', margin: 'auto', opacity: 3, background: 'rgba(225, 225, 225,0.5)', borderRadius: '15px' }}>
            <SearchIcon style={{ position: 'absolute', left: '10px' }} />
            <InputBase
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchQueryChange}
              fullWidth
              inputProps={{ style: { textAlign: 'center' } }}
            />
          </div>
        </div>
      </div>

      <br /><br />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {filteredBlogs.map((value, index) => (
          <div style={{ margin:'10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }} key={index}>
            <Card sx={{ height: '60vh', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.9)' }}>
              <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {value.author}
                    <img src={Book}  alt="Book cover" onClick={() => navigate(`/book/${value._id}`)}  style={{ objectFit: 'cover', height: '300px', width: '100%' }}></img> 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.publicationDate}
                  </Typography>
                </div>
                <Divider />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </div>
                
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
