import React,{useState} from 'react'
// import Navbar from './Navbar'
import { Button,TextField, Typography,Box } from '@mui/material'
// import AdminBar from './components/Admin/AdminBar';
import AdminBar from './AdminBar'
import axios from 'axios'


const AddBook = () => {
  var [inputs,setInputs]=useState({
  title:"",
  author:"",
  description:"",
  publicationDate:"",
  genre:"",
  isbnNo:""
  })
  
  const inputHandler=(e)=>{
    const{name,value}=e.target
    setInputs((inputs)=>({...inputs,[name]:value}))

  }
  const readValues = async()=>{
    console.log("Clicked");
    console.log(inputs);
    const method = "post"
    if(method==="post"){
      axios.post("http://localhost:4000/add_book",inputs)
      .then(response=>{
        alert("Success");
        console.log(response)
      })
      .catch(err=>console.log(err))
    }
  }

  return (
    <div>
    
      <div><AdminBar/> 
      <div style={{padding:"100px"}} >
      <Box sx={{ marginLeft:"35%",borderRadius: 1, borderColor: 'red', border: " 2px solid black", width: 'fit-content', padding: 10, borderRadius: 5, marginTop: '5%', backgroundColor: "rgba(255,255,255,0.8)", boxShadow: "rgba(0,0,0,0.7) -20px 0px 15px -3px  " }}>
        <Typography variant='h4'>Add Book</Typography>
        <TextField style={{ margin: 9 }} color="error" label=" Title"  name='title' onChange={inputHandler} variant='filled'/>
        <TextField  style={{ margin: 9 }}color="error" label=" Author" name='author' onChange={inputHandler} variant='filled'/><br/>
        <TextField style={{ margin: 9}}  color="error" label=" Description"  name='description' onChange={inputHandler} variant='filled'/>
        <TextField  style={{ margin: 9 }}color="error" label=" Publication Date"  name='publicationDate' onChange={inputHandler} variant='filled'/><br/>
        <TextField  style={{ margin: 9}} color="error" label=" Genere" name='genre' onChange={inputHandler} variant='filled' />
        <TextField  style={{ margin: 9 }}color="error" label=" ISBN"  name='isbnNo' onChange={inputHandler} variant='filled'/><br/>
        <Button variant='contained' style={{ backgroundColor: "#AB0808", color: "white" }} onClick={readValues} >Submit</Button> 
        </Box>
      </div>
    </div>
    </div>
  )
}

export default AddBook
