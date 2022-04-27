import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Appbar from './Appbar';
import StickyFooter from './footer';

import TextField from '@mui/material/TextField';
import { Paper , Button} from '@mui/material';

export default function Signup() {
    const paperStyle={padding:"50px 20px",width:400,margin:"20px auto"}
    const[name,setName]=useState('')
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('') 
    const[password,setpassword]=useState('')
    const signup=(e)=>{
        e.preventDefault()
        const user={name,username,email,password}
        console.log(user)
        fetch("http://localhost:8080/api/auth/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
}).then(()=>{
    console.log("signup successfull")
})}


  return (
      <div>
        <Appbar/>
          <Paper elevation={3} style={paperStyle}>
              <h1>Sign up</h1>
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
          label="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="UserName"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          
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
    <Button variant="contained" color="success" onClick={signup}>
  Signup
</Button>
    </Paper>
    <StickyFooter/>
    </div>
  );
}
