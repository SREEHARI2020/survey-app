import React,{useState,useEffect} from 'react'
import NoSurvey from './NoSurvey'
import Survey from './Survey'


const Home = ({items,checkUser}) => {
  
    // console.log(items)

    let array=items;
    array.pop();
    // console.log(array)
  
    // console.log(array[0].username.user)
    // console.log(array.some(item => item.username.user === checkUser.user))
    return (
        <div>
            
            {array?.length && array.some(item => item.username.user === checkUser.user) ? <NoSurvey/>:  <Survey/> } 
        </div>
    )
}

export default Home
