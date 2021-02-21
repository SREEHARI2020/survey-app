import React,{useState} from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import AdminPage from './AdminPage';
import AdminLogin from './AdminLogin';

const Admin = () => {

    const adminUser={
        email:"admin@gmail.com",
        password:"admin"
    }
    const [admin,setAdmin]=useState("");
  const [adminpass, setAdminpass] = useState('');
  const [error,setError]=useState("");

  const handleLogin=(adm,pass)=>{
    if(adm===adminUser.email && pass===adminUser.password){
        setAdmin(adm);
        setAdminpass(pass);
    }
    else{
        setError("You are not authorised to login")
    }
  } 

    return (
      <div className="Admin-container">
       {admin!=""? <AdminPage/>:
       <AdminLogin handleLogin={handleLogin} error={error} 
       
       

       />}
        </div>
    )
}

export default Admin
