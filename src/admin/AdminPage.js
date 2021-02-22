import React from 'react'
import './AdminPage.css'
import {Link} from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AssignmentIcon from '@material-ui/icons/Assignment';
const AdminPage = () => {
    return (
        <div className="admin-page-container">
            <div className="admin-page-container-header">Welcome admin</div>
            <div className="admin-page-container-body">
              <Link to='/survey'><div className="admin-page-container-body-survey " >
              <div className="admin-page-container-body-survey-top " > Complete the survey
                   <div> <AssignmentIcon  className="icon" /></div>
              </div>
              </div> 
              </Link>  
                
                 <Link to='/userslogged'><div className="admin-page-container-body-view-users" >
                     
                      <div className="admin-page-container-body-view-users-top " > View the users logged in
                     <div> <VisibilityIcon  className="icon" /></div> </div> 
                      </div>
                    </Link>  
              </div>


            
        </div>
    )
}

export default AdminPage
