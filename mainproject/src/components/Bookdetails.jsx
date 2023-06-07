import { CardContent, Typography, Card, Button, Box, ButtonGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import user from './logo/user.jpg';

function BookDetails() {
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);
  const nav = useNavigate()
  const { id } = useParams();

  useEffect(() => {
    setLoading(true); // Set loading state to true before making the request
    async function getdata() {
        await axios
      .get(`http://localhost:4000/singlebook/${id}`)
      .then((response) => {
        console.log(response.data);
        setBook(response.data);
        setLoading(false); // Set loading state to false after receiving the response
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading state to false in case of error
      });
    }
    getdata()
  }, [id]);

  if (loading) {
    return <p>Loading...</p>; // Display a loading message while fetching the data
  }


 

  return (
    <div
      style={{
        backgroundImage: `url(${user})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
        marginBottom: '100%'
        
      }}
    >
      <br />
      <br />
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Card
            sx={{
              maxWidth: 1000,
              margin: '10px',
              boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.9)',
              height: 'auto',
              display: 'flex',
              opacity: 0.5, // Adjust the opacity value as needed
              backdropFilter: 'blur(10px)', // Apply a backdrop blur effect
              backgroundColor:'black'
            }}
          >
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                fontFamily: 'Merriweather',
                color: 'white',
                
              }}
            >
              <Typography variant='h3'>Title: {book.title}</Typography>
              <Typography variant='h5'>Author: {book.author}</Typography>
              <Typography>PublicationYear:{book.publicationDate}</Typography>
              <Typography>Book Number: {book.isbnNo}</Typography>
              <Typography>Book Type: {book.genre}   </Typography>
              <Typography style={{fontSize:'16px'}}>Description: {book.description}</Typography>
              <br /><br />
  <div 
    sx={{ 
    backgroundColor: 'white',  
    orientation:"Horizontal",
 }} >

      <Button
        variant="contained"
        sx={{ backgroundColor: 'white', color: 'black' }}
        onClick={ () => {
          alert("Borrowed")
          nav("/viewbook")
        } 
        
        }
        >
        Borrow
      </Button>
       <Button
         variant="contained"
         sx={{ backgroundColor: 'white', color: 'black' }}>
        Return
        </Button>  
        </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
    </div>
  );
}

export default BookDetails;