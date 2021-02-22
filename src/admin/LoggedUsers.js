import React,{useState,useEffect} from 'react'
import './LoggedUsers.css'
import firebase from '../../src/firebase'
const LoggedUsers = () => {
    const [views, setViews] = useState([]);
    // const[items,setItems]=useState([]);


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
          setViews(newState);
          
        
        });
      

    }, [])
   
    return (
     
        <div className="Table-container">
  
  <table >
    <thead>
        <tr>
        <th>SL No</th>
    <th>UserNames</th>
        </tr>
    </thead>

    <tbody>

    {views? views.map((view,i)=>(
    
    <tr key={view.id}>
        <td>{i+1}</td>
        <td>{view.username?view.username.user:"no"}</td>
        </tr>))

    
    :<tr>hey</tr>}
    
</tbody>
    </table>

    
        
     
     
    

    </div>
   
   
   );
}

export default LoggedUsers


