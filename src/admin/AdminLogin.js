import React,{useState} from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import './AdminLogin.css'

const AdminLogin = ({handleLogin,error,
  } ) => {

  const [adm, setAdm] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit=()=>{
   
    handleLogin(adm,pass);
  }

    return (
   
              <div className="Forms-container"> 
                      
         <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {error?<div className="Forms-container-error">{error}</div>:""}  
        <form  >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={(e)=>setAdm(e.target.value)}
             value={adm}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e)=>setPass(e.target.value)} 
            value={pass}
            autoComplete="current-password"
          />
         
          <Button
         
          
         onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="secondary"
            
          >
            Admin Sign In
          </Button>
          </form>
        </div>
        
    )
}

export default AdminLogin
