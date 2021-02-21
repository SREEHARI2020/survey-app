
import { BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import {useState} from 'react';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [user,setUser]=useState('');
  const [password, setPassword] = useState('');
  const [items,setItems]=useState([]);
  const[checkUser,setCheckUser]=useState('')
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/'> <Login user={user} setUser={setUser} 
      password={password} setPassword={setPassword} 
      items={items}  setItems={setItems} setCheckUser={setCheckUser}
      />
      
      </Route>

      <Route exact path='/home'><Home items={items} checkUser={checkUser}/></Route>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
