import logo from './logo.svg';
import './App.css';
import Temp from './component/Temp';
import CompanyCard from './component/Temp';
import Insert from './component/insert';
import Login from './component/login';
import Sing from './component/singup';
import Update from './component/update';
import Home from './component/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
    <Router>
  
    
  
      <Routes >
      
      <Route exact path='/insert' element={ <Insert/>}></Route>
      <Route exact path='/show' element={<Home/>}></Route>
      <Route exact path='/' element={<Login/>}></Route>
      <Route exact path='/singup' element={<Sing/>}></Route>
      <Route exact path='/update/cid/:e' element={<Update/>}></Route>
      
      </Routes>
      
    </Router>
   
   
   
  
      
    </div>
  );
}

export default App;
