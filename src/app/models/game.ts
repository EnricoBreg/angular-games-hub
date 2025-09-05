export interface Game {
  id: number;
  title: string;
  genre: string;
  releaseDate: string;
  rating: number;
  description?: string;
  backgroundImage?: string;
}
