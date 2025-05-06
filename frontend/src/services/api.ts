import { Movie, MovieFormData } from '../types/Movie';

const API_URL = 'http://localhost:8080';

export const movieService = {
  async getAll(): Promise<Movie[]> {
    const response = await fetch(`${API_URL}/api/Movies`);
    return response.json();
  },

  async getById(id: number): Promise<Movie> {
    const response = await fetch(`${API_URL}/api/Movies/${id}`);
    return response.json();
  },

  async create(movie: MovieFormData): Promise<Movie> {
    const response = await fetch(`${API_URL}/api/Movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
    return response.json();
  },

  async update(id: number, movie: MovieFormData): Promise<Movie> {
    const response = await fetch(`${API_URL}/api/Movies/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
    return response.json();
  },

  async delete(id: number): Promise<void> {
    await fetch(`${API_URL}/api/Movies/${id}`, {
      method: 'DELETE',
    });
  },
}; 