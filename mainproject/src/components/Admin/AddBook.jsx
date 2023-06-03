import React,{useState} from 'react'
// import Navbar from './Navbar'
import { Button,TextField, Typography,Box } from '@mui/material'
// import AdminBar from './components/Admin/AdminBar';
import AdminBar from './AdminBar'


const AddBook = (props) => {
  var [inputs,setInputs]=useState(props.data)
  
  const inputHandler=(e)=>{
    const{name,value}=e.target
    setInputs((inputs)=>({...inputs,[name]:value}))

  }
  const readValues = async()=>{
    
  }

  return (
    <div>
    
      <div><AdminBar/> 
      <div style={{padding:"100px"}} >
      <Box sx={{ marginLeft:"35%",borderRadius: 1, borderColor: 'red', border: " 2px solid black", width: 'fit-content', padding: 10, borderRadius: 5, marginTop: '5%', backgroundColor: "rgba(255,255,255,0.8)", boxShadow: "rgba(0,0,0,0.7) -20px 0px 15px -3px  " }}>
        <Typography variant='h4'>Add Book</Typography>
        <TextField style={{ margin: 9 }} color="error" label=" Title"  name='title' onChange={inputHandler} variant='filled'/>
        <TextField  style={{ margin: 9 }}color="error" label=" Author" name='author' onChange={inputHandler} variant='filled'/><br/>
        <TextField style={{ margin: 9}}  color="error" label=" Description"  name=' description' onChange={inputHandler} variant='filled'/>
        <TextField  style={{ margin: 9 }}color="error" label=" Publication Date"  name='publicationDate' onChange={inputHandler} variant='filled'/><br/>
        <TextField  style={{ margin: 9}} color="error" label=" Genere" name=' genre' onChange={inputHandler} variant='filled' />
        <TextField  style={{ margin: 9 }}color="error" label=" ISBN"  name='isbnNo' onChange={inputHandler} variant='filled'/><br/>
        <Button variant='contained' style={{ backgroundColor: "#AB0808", color: "white" }} onClick={readValues} >Submit</Button> 
        </Box>
      </div>
    </div>
    </div>
  )
}

export default AddBook
