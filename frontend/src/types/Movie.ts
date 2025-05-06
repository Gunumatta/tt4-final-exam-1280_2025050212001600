export interface Movie {
  id: number;
  title: string;
  genre: string;
  watched: boolean;
  rating: number;
}

export interface MovieFormData {
  title: string;
  genre: string;
  watched: boolean;
  rating: number;
} 