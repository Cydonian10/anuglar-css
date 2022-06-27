export interface IMovieResponse {
  page: number;
  results: IMovieTrending[];
}
export interface IMovieTrending {
  id: number;
  poster_path: string;
  title: string;
  adult: boolean;
  backdrop_path: string;
}
