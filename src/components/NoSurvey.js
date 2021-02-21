import { Button } from '@material-ui/core';
import React from 'react'
import './NoSurvey.css';
import{useHistory} from 'react-router-dom';
const NoSurvey = () => {
    const history=useHistory();
    return (
        <div className="no-survey-container">
            <div className="no-survey-container-text">  You have already Completed the Survey </div>
            
          <div className="no-survey-container-button" > <Button variant="contained"  
        color="primary"
        size="large" onClick={()=> history.push('/')}>Go back to Login page</Button>
        </div> 
        </div>
    )
}

export default NoSurvey
