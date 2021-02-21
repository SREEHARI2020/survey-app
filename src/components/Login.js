import { Button, TextField, Typography } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import './Login.css'
import firebase from '../firebase';
import {useHistory} from 'react-router-dom';

const Login = ( {user,setUser,password,setPassword,item,setItems,setCheckUser}) => {
  
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
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
           onClick={(e)=>handleSubmit(e)}
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
