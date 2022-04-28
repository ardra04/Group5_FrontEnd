import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
export default function StickyFooter() {
  return (
    <div>

      <CssBaseline />
      
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'main'
              ? theme.palette.grey[200]
              : theme.palette.grey[300],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
          <div className="list">


  <Link to="/">Home</Link> <br/>
  <Link to="about">About</Link> <br/>
  <Link to="login">login</Link> <br/>
  <Link to="signup">Signup</Link>


</div>
          </Typography>
        </Container>
      </Box>
      </div>
    
  );
}