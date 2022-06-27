import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "src/app/services/movies.service";

import { map, Observable, of, Subject, switchMap, takeUntil, tap } from "rxjs";
import { IMovieTrending } from "src/app/models/movies.model";
import { ObserverDirective } from "src/app/shared/directivas/observer.directive";
import { ListItemDirective } from "src/app/shared/directivas/list-item.directive";
import { ScrollTopDirective } from "src/app/shared/directivas/scroll-top.directive";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@Component({
  selector: "app-gender-movies",
  standalone: true,
  imports: [
    CommonModule,
    ObserverDirective,
    ListItemDirective,
    ScrollTopDirective,
    MatProgressBarModule,
  ],
  templateUrl: "./gender-movies.component.html",
  styleUrls: ["./gender-movies.component.scss"],
})
export class GenderMoviesComponent implements OnInit {
  // ! variables
  private destroy$ = new Subject<boolean>();
  protected movies$!: Observable<IMovieTrending[] | null>;

  constructor(private route: ActivatedRoute, private moviSer: MoviesService) {}

  ngOnInit(): void {
    this.getParams();
  }

  // ! methodos
  /**
   * ? getting parametres
   * @id @name
   */
  getParams() {
    this.movies$ = this.route.data.pipe(map((data) => data["movie"]));
    // this.movies$ = this.route.paramMap.pipe(
    //   switchMap((params) => {
    //     takeUntil(this.destroy$);
    //     const id = params.get("id");
    //     if (id) return this.moviSer.getMoveByGender(Number(id));
    //     return of(null);
    //   })
    // );
  }
}
