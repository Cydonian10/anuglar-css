import { Injectable } from "@angular/core";
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { catchError, delay, Observable, of } from "rxjs";
import { IMovieTrending } from "../models/movies.model";
import { MoviesService } from "./movies.service";

@Injectable({
  providedIn: "root",
})
export class MovieDetailResolver implements Resolve<IMovieTrending[]> {
  constructor(private movie: MoviesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieTrending[]> {
    return this.movie.getMoveByGender(route.params["id"]);
  }
}
