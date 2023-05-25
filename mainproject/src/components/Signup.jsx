import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography
} from '@mui/material';
import axios from 'axios';

const Signup = () => {
  const [input, setInput] = useState({
    FirstName: '',
    SecondName: '',
    Age: '',
    Dob: '',
    Address: '',
    PhoneNumber: '',
    Institution: '',
    Course: '',
    EmailId: '',
    Password: '',
    ConfirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);


  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((input) => ({ ...input, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate first name
    if (input.FirstName.trim() === '') {
      newErrors.FirstName = 'First Name is required';
      isValid = false;
    }

    // Validate second name
    if (input.SecondName.trim() === '') {
      newErrors.SecondName = 'Second Name is required';
      isValid = false;
    }

    // Validate age
    if (input.Age.trim() === '') {
      newErrors.Age = 'Age is required';
      isValid = false;
    }

    // Validate date of birth
    if (input.Dob.trim() === '') {
      newErrors.Dob = 'Date of Birth is required';
      isValid = false;
    }

    // Validate address
    if (input.Address.trim() === '') {
      newErrors.Address = 'Address is required';
      isValid = false;
    }

    // Validate phone number
    if (input.PhoneNumber.trim() === '') {
      newErrors.PhoneNumber = 'Phone Number is required';
      isValid = false;
    }

    // Validate institution
    if (input.Institution.trim() === '') {
      newErrors.Institution = 'Institution is required';
      isValid = false;
    }

    // Validate course
    if (input.Course.trim() === '') {
      newErrors.Course = 'Course is required';
      isValid = false;
    }

    // Validate email id
    if (input.EmailId.trim() === '') {
      newErrors.EmailId = 'Email ID is required';
      isValid = false;
    }

    // Validate password
    if (input.Password.trim() === '') {
      newErrors.Password = 'Password is required';
      isValid = false;
    }

    // Validate confirm password
    if (input.ConfirmPassword.trim() === '') {
      newErrors.ConfirmPassword = 'Confirm Password is required';
      isValid = false;
    } else if (input.Password !== input.ConfirmPassword) {
      newErrors.ConfirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form is valid');
      console.log(input);
      // Submit form data
      const method = 'post'; // Assuming method is defined elsewhere
      if (method === 'post') {
        axios
          .post('http://localhost:4000/create', input)
          .then((response) => {
            alert('Success');
          })
          .catch((err) => console.log(err));
      }
    } else {
      console.log('Form is invalid');
    }
  };
  // var colo =  
  
  return (
    <div style={{ display:'flex', justifyContent:"center",width: "100%", height: "100%", alignItems:'center',alignContent:'center',textAlign:'center' }}>
      <br /><br /><br /> 
        <Box sx={{borderRadius:1, borderColor:'red', border:" 2px solid black", width:'fit-content',padding:0.5, borderRadius:5, marginTop:'-2.4%',backgroundColor:"rgba(255,255,255,0.7)",boxShadow:"rgba(0,0,0,0.7) -20px 0px 15px -3px  "}}>
        <Typography variant='h6' color="black"><b>Create your  Account</b><br /> to continue </Typography><br />
        <Typography style={{marginRight:"65%",color:"black"}}><b>Name</b></Typography><br />
        <TextField
          style={{ WebkitTextFillColor:"black", margin:3 ,width:"36%"}}
          variant="filled"
          label="First Name"
          color="error"
          name='FirstName'
          value={input.FirstName}
          onChange={inputHandler}
          required
          error={errors.FirstName ? true : false}
          helperText={errors.FirstName}
        />
        <TextField
          style={{ WebkitTextFillColor:"black", margin:3 ,width:"36%"}}
          variant="filled"
          label="Second Name"
          color="error"
          name='SecondName'
          value={input.SecondName}
          onChange={inputHandler}
          required
          error={errors.SecondName ? true : false}
          helperText={errors.SecondName}
        /><br /><br />
        <Typography style={{marginRight:"59%",color:"black"}}><b>Age & DOB</b></Typography><br />
        <TextField
          style={{ WebkitTextFillColor:"black", margin:3,width:"36%" }}
          variant="filled"
          label="Age"
          type="number"
          color="error"
          name='Age'
          value={input.Age}
          onChange={inputHandler}
          required
          error={errors.Age ? true : false}
          helperText={errors.Age}
        />
        <TextField
          style={{ WebkitTextFillColor:"black", margin:3,width:"36%" }}
          variant="filled"
          type="date"
          color="error"
          name='Dob'
          value={input.Dob}
          onChange={inputHandler}
          required
          error={errors.Dob ? true : false}
          helperText={errors.Dob}
        /><br /><br />
        <Typography style={{marginRight:"40%",color:"black"}}><b>Address & Contact Details</b></Typography><br />
        <TextField
          style={{ WebkitTextFillColor:"black", margin:3,width:"36%" }}
          variant="filled"
          label="Adddress "
          color="error"
          name='Address'
          multiline
          value={input.Address}
          onChange={inputHandler}
          required
          error={errors.Address ? true : false}
          helperText={errors.Address}
        />
      
        <TextField
          style={{ WebkitTextFillColor:"black", margin:3,width:"36%" }}
          variant="filled"
          label="Phone number"
          color="error"
          name='PhoneNumber'
          value={input.PhoneNumber}
          onChange={inputHandler}
          required
          error={errors.PhoneNumber ? true : false}
          helperText={errors.PhoneNumber}
        /><br /><br />
        <Typography style={{marginRight:"59%",color:"black"}}><b>Education</b></Typography><br />
        <TextField
          style={{ WebkitTextFillColor:"black", margin:3,width:"36%" }}
          variant="filled"
          label="Institution"
          color="error"
          name='Institution'
          value={input.Institution}
          onChange={inputHandler}
          required
          error={errors.Institution ? true : false}
          helperText={errors.Institution}
        />
        <TextField
          style={{ WebkitTextFillColor:"black", margin:3,width:"36%" }}
          variant="filled"
          label="Course"
          color="error"
          name='Course'
          value={input.Course}
          onChange={inputHandler}
          required
          error={errors.Course ? true : false}
          helperText={errors.Course}
        /><br /><br />
        <TextField
          style={{ WebkitTextFillColor:"black", margin:3,width:"73%" }}
          variant="filled"
          label="Email id"
          color="error"
          name='EmailId'
          value={input.EmailId}
          onChange={inputHandler}
          required
          error={errors.EmailId ? true : false}
          helperText={errors.EmailId}
        /><br /><br />
        <TextField
          style={{ WebkitTextFillColor:"black", margin:3,width:"36%" }}
          variant="filled"
          label="Password"
          type="password"
          color="error"
          name='Password'
          value={input.Password}
          onChange={inputHandler}
          required
          error={errors.Password ? true : false}
          helperText={errors.Password}
        />
      <TextField
          style={{ WebkitTextFillColor: "black", margin:3,width:"36%" }}
          variant="filled"
          type="password"
          label="Confirm Password"
          color="error"
          name='ConfirmPassword'
          value={input.ConfirmPassword}
          onChange={inputHandler}
          required
          error={errors.ConfirmPassword ? true : false}
          helperText={errors.ConfirmPassword}
        /><br /><br />
        <FormGroup>
        <FormControlLabel
              control={<Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} 
              color="primary" required style={{color:"black"}}/>}
              label="Accept Terms and conditions (if book is not returned or damaged fine will be charged)."
              required
            />
        </FormGroup>
        <Button
          variant="contained"
        style={{  color: 'white', width: 200 }}
          type="submit"
          onClick={handleSubmit}
          disabled={!isChecked}
          color='error'
          >
          Sign Up
        </Button>

      </Box>
    </div>
  );
};

export default Signup;
