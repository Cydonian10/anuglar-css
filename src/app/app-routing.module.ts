import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieDetailResolver } from "./services/movie-detail.resolver";
import { HeaderComponent } from "./shared/header/header.component";

const routes: Routes = [
  {
    path: "",
    component: HeaderComponent,
    children: [
      {
        path: "",
        title: "pelis | home",
        loadComponent: () => import("./pages/home/home.component").then((c) => c.HomeComponent),
      },
      {
        path: ":movie-by-gender/:id/:nameGender",
        title: "pelis | gender",
        loadComponent: () =>
          import("./pages/gender-movies/gender-movies.component").then(
            (c) => c.GenderMoviesComponent
          ),
        resolve: { movie: MovieDetailResolver },
      },
      {
        path: "results",
        title: "app | results",
        loadComponent: () =>
          import("./pages/result-movies/result-movies.component").then(
            (c) => c.ResultMoviesComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
