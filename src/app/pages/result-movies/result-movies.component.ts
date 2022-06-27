import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

import { Observable, of, switchMap, tap } from "rxjs";

import { IMovieTrending } from "src/app/models/movies.model";
import { MoviesService } from "src/app/services/movies.service";
import { ObserverDirective } from "src/app/shared/directivas/observer.directive";
import { SpinerService } from "src/app/services/spiner.service";
import { SpinerComponent } from "src/app/shared/components/spiner/spiner.component";

@Component({
  selector: "app-result-movies",
  standalone: true,
  imports: [CommonModule, ObserverDirective, SpinerComponent],
  templateUrl: "./result-movies.component.html",
  styleUrls: ["./result-movies.component.scss"],
})
export class ResultMoviesComponent implements OnInit {
  loading!: Observable<boolean>;

  results!: Observable<IMovieTrending[] | null>;

  constructor(private moviSer: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.results = this.route.queryParamMap.pipe(
      switchMap((r) => {
        const query = r.get("query");
        if (query) return this.moviSer.getSearch(query);
        else return of(null);
      })
    );
  }
}
