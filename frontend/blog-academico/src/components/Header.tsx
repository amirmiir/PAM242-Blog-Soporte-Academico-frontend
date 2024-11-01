import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-lg font-bold">My Website</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                        <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
                        <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;