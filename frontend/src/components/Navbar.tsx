import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white text-xl font-bold">
            Movie Watchlist
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-white hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Movies
            </Link>
            <Link
              to="/add"
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
            >
              Add Movie
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 