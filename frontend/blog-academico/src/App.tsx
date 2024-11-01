import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Explore from './pages/Explore';

import NotFound from './pages/NotFound';


const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/explore" element={<Explore/>}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </Router>
    );
};

export default App;