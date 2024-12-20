import React from 'react';
import { Routes, Route , Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Book from '../pages/Book';
import Author from '../pages/Author';
import Category from '../pages/Category';
import Login from '../pages/Login';


const AppRoute = ({isLoggedIn, onLogin}) => {
    return (
        <Routes>
            {isLoggedIn ? (
                <>
                    <Route path='/' element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="/books" element={<Book />} />
                    <Route path="/authors" element={<Author />} />
                    <Route path="/categories" element={<Category />} />
                    <Route path="*" element={<Navigate to= "/"/>}/>
                </>
            ) : (
                    <Route path='*' element={<Login  onLogin={onLogin}/>} />
            )}
            
            
        </Routes>
    );
};

export default AppRoute;