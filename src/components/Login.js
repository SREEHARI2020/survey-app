import { Button, TextField, Typography } from '@material-ui/core';
import React,{useState} from 'react'
import './Login.css'

const Login = () => {
    const [user,setUser]=useState('');
    const [password, setPassword] = useState('')
    return (
        <div className="Forms-container">
         


               
               <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={(e)=>setUser(e.target.value)}
             value={user}
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
            onChange={(e)=>setPassword(e.target.value)} 
            value={password}
            autoComplete="current-password"
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Sign In
          </Button> </form>

        </div>
    )
}

export default Login
