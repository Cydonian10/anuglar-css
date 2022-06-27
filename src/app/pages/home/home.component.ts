import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { MoviesService } from "src/app/services/movies.service";
import { Observable, tap } from "rxjs";
import { IMovieTrending } from "src/app/models/movies.model";
import { ObserverDirective } from "src/app/shared/directivas/observer.directive";
import { SpinerComponent } from "src/app/shared/components/spiner/spiner.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HeaderComponent, ObserverDirective, SpinerComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  movies$!: Observable<IMovieTrending[]>;
  loading$: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies$ = this.moviesService.getMovies();
  }
}
