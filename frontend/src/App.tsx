import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList.tsx';
import MovieForm from './components/MovieForm.tsx';
import Navbar from './components/Navbar.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/add" element={<MovieForm />} />
            <Route path="/edit/:id" element={<MovieForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App; 