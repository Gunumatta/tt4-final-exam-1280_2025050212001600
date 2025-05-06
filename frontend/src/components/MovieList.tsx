import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/Movie';
import { movieService } from '../services/api.ts';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await movieService.getAll();
        setMovies(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('Failed to load movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      try {
        await movieService.delete(id);
        setMovies(movies.filter(movie => movie.id !== id));
      } catch (error) {
        console.error('Error deleting movie:', error);
        setError('Failed to delete movie. Please try again later.');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Watchlist</h1>
        <Link
          to="/add"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Add Movie
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {movie.title}
              </h2>
              <p className="text-gray-600 mb-2">Genre: {movie.genre}</p>
              <p className="text-gray-600 mb-2">
                Status: {movie.watched ? 'Watched' : 'Not Watched'}
              </p>
              <p className="text-gray-600 mb-4">Rating: {movie.rating}/10</p>
              <div className="flex justify-end space-x-2">
                <Link
                  to={`/edit/${movie.id}`}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(movie.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList; 