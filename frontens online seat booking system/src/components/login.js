// import * as React from 'react';
import StickyFooter from './footer';
import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Appbar from './Appbar';

import TextField from '@mui/material/TextField';
import { Paper , Button} from '@mui/material';


export default function Login() {
    const paperStyle={padding:"50px 20px",width:400,margin:"20px auto"}
    const[usernameOrEmail,setName]=useState('')
    const[password,setpassword]=useState('')
    const login=(e)=>{
        e.preventDefault()
        const user={usernameOrEmail,password}
        console.log(user)
        fetch("http://localhost:8080/api/auth/signin",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
}).then(()=>{



    console.log("Login successfull")
})}


  return (
    
      <div>
        <Appbar/>
          <Paper elevation={3} style={paperStyle}>
              <h1>Login</h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '600' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="UserName"
          value={usernameOrEmail}
          onChange={(e)=>setName(e.target.value)}
          
        />
        <br/>
   
        <TextField
        required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          
        />
       
      </div>
    </Box>
    <Button variant="contained" color="success" onClick={login}>
  Login
</Button>
    </Paper>
    <StickyFooter/>
    </div>
  );
}
