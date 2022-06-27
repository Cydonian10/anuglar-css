import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { IMovieResponse, IMovieTrending } from "../models/movies.model";
import { map } from "rxjs";
import { IGender, IGenderResponse } from "../models/gender.model";
@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private apiKey = environment.api_key;
  private urlBase = environment.url_base;

  constructor(private http: HttpClient) {}
  getMovies() {
    return this.http
      .get<IMovieResponse>(`${this.urlBase}/trending/movie/day?api_key=${this.apiKey}`)
      .pipe(
        map((value) =>
          value.results.map((item) => {
            const urlImage = `https://image.tmdb.org/t/p/w300/${item.poster_path}`;
            item.poster_path = urlImage;
            return item;
          })
        )
      );
  }

  getGendersList() {
    return this.http.get<IGenderResponse>(
      `${this.urlBase}/genre/movie/list?api_key=${this.apiKey}`
    );
  }

  getMoveByGender(id: IGender["id"]) {
    return this.http
      .get<IMovieResponse>(`${this.urlBase}/discover/movie/?api_key=${this.apiKey}`, {
        params: { with_genres: id },
      })
      .pipe(
        map((value) =>
          value.results.map((item) => {
            const urlImage = `https://image.tmdb.org/t/p/w300/${item.poster_path}`;
            item.poster_path = urlImage;
            return item;
          })
        )
      );
  }

  getSearch(query: string) {
    return this.http
      .get<IMovieResponse>(`${this.urlBase}/search/movie`, {
        params: {
          api_key: this.apiKey,
          query,
        },
      })
      .pipe(
        map((value) =>
          value.results.map((item) => {
            const urlImage = `https://image.tmdb.org/t/p/w300/${item.poster_path}`;
            item.poster_path = urlImage;
            return item;
          })
        )
      );
  }
}
