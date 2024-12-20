import React , {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoute from './routes/AppRoute';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credential) => {
    if(credential.username === "admin" && credential.password === "admin") {
      setIsLoggedIn(true);
    }
    else{
      alert('Invalid Username pr Password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  }
  return (
    <Router>
        {isLoggedIn && <Navbar onLogout={handleLogout}/>}
        <AppRoute isLoggedIn={isLoggedIn} onLogin={handleLogin}/>
    </Router>
  );
}

export default App;
