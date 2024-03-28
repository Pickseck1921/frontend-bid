
import './App.css';
import { Route, Routes,Link } from 'react-router-dom';
import CreateUserComponent from './Components/CreateUserComponent';
import LoginUserComponent from './Components/LoginUserComponent';

let App =()=> {

  return (
    <div className="main-container">
     <nav>
      <ul className='navbar'>
       <li><Link to= "/">Index</Link></li>
       <li><Link to= "/register">Register</Link></li>
       <li><Link to= "/login">Login</Link></li>
      </ul>
     </nav>
     <Routes>
      <Route path="/register" element={
      <CreateUserComponent/>
      }/>
       <Route path="/login" element={
        <LoginUserComponent/>
      
      }/>
       <Route path="/" element={
      <p>Index of website {localStorage.getItem("apikey")}</p>}/>
     </Routes>
    </div>
  );
}

export default App;
