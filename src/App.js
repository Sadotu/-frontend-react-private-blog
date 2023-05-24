import React, { useState } from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Overview from './pages/BlogOverview/BlogOverview';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import BlogPost from './pages/Blogpost/Blogpost';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
      <>
        <Navigation isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login auth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>}/>
            <Route path="/blogposts" element={isAuthenticated ? <Overview /> : <Navigate to="/login" />} />
            <Route path="/blogposts/:blogId" element={isAuthenticated ? <BlogPost /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </>
  );
}

export default App;