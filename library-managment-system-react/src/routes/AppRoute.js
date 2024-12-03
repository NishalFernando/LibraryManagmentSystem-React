import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Book from '../pages/Book';
import Author from '../pages/Author';
import Category from '../pages/Category';


const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Book />} />
            <Route path="/authors" element={<Author />} />
            <Route path="/categories" element={<Category />} />
            
        </Routes>
    );
};

export default AppRoute;