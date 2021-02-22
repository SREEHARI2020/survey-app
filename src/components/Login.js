
import { Button, TextField, Typography } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import './Login.css'
import firebase from '../firebase';
import {useHistory,Link} from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Login = ( {user,setUser,password,setPassword,item,setItems,setCheckUser}) => {
  
    const history=useHistory();

    const [error,setError] =useState({})


    const validate=()=>{
        let valid={}
        valid.username=user.length>6 && user.length<30? "":" email should be between 6 to  30 characters"
        valid.password=password.length>5 && password.length<10? "":" password should be between 5 to 10 characters"
        
        return valid;
    }
    
     

       




 const handleSubmit=(e)=>{
        e.preventDefault();
        let obj=validate();
        setError(obj);

        if(error.username==="" && error.password===""){
        const itemsRef = firebase.database().ref('items');
        const item = {
           
            username: {user},
            password: {password}
          }
          itemsRef.push(item);
          setUser('');
          setPassword('');
        history.push('/home')

        }
    }

    useEffect(() => {
      
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              id: item,
              username: items[item].username,
              password: items[item].password
             
            });
          }
          setItems(newState);
          setCheckUser(newState.slice(-1)[0].username)
        });
      

    }, [])

    return (
        <div className="Forms-container">           
         <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form >
        {error? <div className="Forms-user-error">{error.username}</div>:""}   
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
             {error? <div className="Forms-user-error">{error.password}</div>:""}  
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
           onClick={(e)=>handleSubmit(e)}
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Sign In
          </Button> </form>

          <Link to="/admin">  
          <div className="Forms-container-admin-link">  
         <div>Admin Login</div> 
         < ArrowForwardIcon/>
        </div>  </Link>

        </div>
    )
}

export default Login
