import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoute from './routes/AppRoute';

function App() {
  return (
    <Router>
        <Navbar></Navbar>
        <AppRoute />
    </Router>
  );
}

export default App;
