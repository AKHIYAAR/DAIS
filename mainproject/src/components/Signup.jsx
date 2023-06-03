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
import Sidebar from './SideBar'

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

  const [isChecked, setIsChecked] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      FirstName,
      SecondName,
      Age,
      Dob,
      Address,
      PhoneNumber,
      Institution,
      Course,
      EmailId,
      Password,
      ConfirmPassword
    } = input;
    console.log({
      FirstName,
      SecondName,
      Age,
      Dob,
      Address,
      PhoneNumber,
      Institution,
      Course,
      EmailId,
      Password,
      ConfirmPassword
    });
    axios.post("http://localhost:4000/register", {
      FirstName,
    SecondName,
    Age,
    Dob,
    Address,
    PhoneNumber,
    Institution,
    Course,
    EmailId,
    Password,
    ConfirmPassword
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          alert("User Created Successfully");
          window.localStorage.setItem("token", res.data.data);
          window.location.href = "/login";
        } 
        if (res.data.status === "error") {
          alert("Please Provide a Valid E-mail");
        } 
        if (res.data.error === "User Exists") {
          alert("You already have an account");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate first name
    if (input.FirstName.trim() === '') {
      newErrors.FirstName = 'First Name is required';
      isValid = false;
    }

    // Validate SecondName
    if (input.SecondName.trim() === '') {
      newErrors.SecondName = 'SecondName is required';
      isValid = false;
    }

    // Validate Age
    if (input.Age.trim() === '') {
      newErrors.Age = 'Age is required';
      isValid = false;
    }

    // Validate place
    if (input.place.trim() === '') {
      newErrors.place = 'Place is required';
      isValid = false;
    }

    // Validate EmailId
    if (input.EmailId.trim() === '') {
      newErrors.EmailId = 'EmailId is required';
      isValid = false;
    }

    // Validate Institution
    if (input.Institution.trim() === '') {
      newErrors.Institution = 'Institution is required';
      isValid = false;
    }

    // Validate Course
    if (input.Course.trim() === '') {
      newErrors.Course = 'Contact Details is required';
      isValid = false;
    }

    // Validate phone number
    if (input.PhoneNumber.trim() === '') {
      newErrors.PhoneNumber = 'Phone Number is required';
      isValid = false;
    }

    // Validate Password
    if (input.Password.trim() === '') {
      newErrors.Password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div> <Sidebar/>
    <div style={{ display: 'flex', justifyContent: "center", width: "100%", height: "100%", alignItems: 'center', alignContent: 'center', textAlign: 'center' }}>
      <br /><br /><br />
      <Box sx={{ borderRadius: 1, borderColor: 'red', border: " 2px solid black", width: 'fit-content', padding: 0.5, borderRadius: 5, marginTop: '-2.4%', backgroundColor: "rgba(255,255,255,0.7)", boxShadow: "rgba(0,0,0,0.7) -20px 0px 15px -3px  " }}>
        <Typography variant='h6' color="black"><b>Create your Account</b><br /> to continue </Typography><br />
        <Typography style={{ marginRight: "65%", color: "black" }}><b>Name</b></Typography><br />
        <form onSubmit={handleSubmit}>
          <TextField
            style={{ WebkitTextFillColor: "black", margin: 3, width: "36%" }}
            variant="filled"
            label="First Name"
            color="error"
            name='FirstName'
            value={input.FirstName}
            onChange={(e) => setInput({ ...input, FirstName: e.target.value })}
            required
            error={errors.FirstName ? true : false}
            helperText={errors.FirstName}
          />
          <TextField
            style={{ WebkitTextFillColor: "black", margin: 3, width: "36%" }}
            variant="filled"
            label="Second Name"
            color="error"
            name='SecondName'
            value={input.SecondName}
            onChange={(e) => setInput({ ...input, SecondName: e.target.value })}
            required
            error={errors.SecondName ? true : false}
            helperText={errors.SecondName}
          /><br /><br />
          <Typography style={{ marginRight: "59%", color: "black" }}><b>Age & DOB</b></Typography><br />
          <TextField
            style={{ WebkitTextFillColor: "black", margin: 3, width: "36%" }}
            variant="filled"
            label="Age"
            type="number"
            color="error"
            name='Age'
            value={input.Age}
            onChange={(e) => setInput({ ...input, Age: e.target.value })}
            required
            error={errors.Age ? true : false}
            helperText={errors.Age}
          />
          <TextField
            style={{ WebkitTextFillColor: "black", margin: 3, width: "36%" }}
            variant="filled"
            type="date"
            color="error"
            name='Dob'
            value={input.Dob}
            onChange={(e) => setInput({ ...input, Dob: e.target.value })}
            required
            error={errors.Dob ? true : false}
            helperText={errors.Dob}
          /><br /><br />
          <Typography style={{ marginRight: "40%", color: "black" }}><b>Address & Contact Details</b></Typography><br />
          <TextField
            style={{ WebkitTextFillColor: "black", margin: 3, width: "36%" }}
            variant="filled"
            label="Address"
            color="error"
            name='Address'
            multiline
            value={input.Address}
            onChange={(e) => setInput({ ...input, Address: e.target.value })}
            required
            error={errors.Address ? true : false}
            helperText={errors.Address}
          />

          <TextField
            style={{ WebkitTextFillColor: "black", margin: 3, width: "36%" }}
            variant="filled"
            label="Phone number"
            color="error"
            name='PhoneNumber'
            value={input.PhoneNumber}
            onChange={(e) => setInput({ ...input, PhoneNumber: e.target.value })}
            required
            error={errors.PhoneNumber ? true : false}
            helperText={errors.PhoneNumber}
          /><br /><br />
          <Typography style={{ marginRight: "59%", color: "black" }}><b>Institution</b></Typography><br />
          <TextField
            style={{ WebkitTextFillColor: "black", margin: 3, width: "36%" }}
            variant="filled"
            label="Institution"
            color="error"
            name='Institution'
            value={input.Institution}
            onChange={(e) => setInput({ ...input, Institution: e.target.value })}
            required
            error={errors.Institution ? true : false}
            helperText={errors.Institution}
          />
          <TextField
            style={{ WebkitTextFillColor: "black", margin: 3, width: "36%" }}
            variant="filled"
            label="Course"
            color="error"
            name='Course'
            value={input.Course}
            onChange={(e) => setInput({ ...input, Course: e.target.value })}
            required
            error={errors.Course ? true : false}
            helperText={errors.Course}
          /><br /><br />
          <TextField
            style={{ WebkitTextFillColor: "black", margin: 3, width: "73%" }}
            variant="filled"
            label="Email id"
            color="error"
            name='EmailId'
            value={input.EmailId}
            onChange={(e) => setInput({ ...input, EmailId: e.target.value })}
            required
            error={errors.EmailId ? true : false}
            helperText={errors.EmailId}
          /><br /><br />
          <TextField
            style={{ WebkitTextFillColor: "black", margin: 3, width: "36%" }}
            variant="filled"
            label="Password"
            type="password"
            color="error"
            name='Password'
            value={input.Password}
            onChange={(e) => setInput({ ...input, Password: e.target.value })}
            required
            error={errors.Password ? true : false}
            helperText={errors.Password}
          />
          <TextField
            style={{ WebkitTextFillColor: "black", margin: 3, width: "36%" }}
            variant="filled"
            type="password"
            label="Confirm Password"
            color="error"
            name='ConfirmPassword'
            value={input.ConfirmPassword}
            onChange={(e) => setInput({ ...input, ConfirmPassword: e.target.value })}
            required
            error={errors.ConfirmPassword ? true : false}
            helperText={errors.ConfirmPassword}
          /><br /><br />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}
                color="primary" required style={{ color: "black" }} />}
              label="Accept Terms and conditions (if book is not returned or damaged fine will be charged)."
              required
            />
          </FormGroup>
          <Button
            variant="contained"
            style={{ color: 'white', width: 200 }}
            type="submit"
            disabled={!isChecked}
            color='error'
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </div>
    </div>
  );
};

export default Signup;
