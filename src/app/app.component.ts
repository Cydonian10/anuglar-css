import { Component, OnInit } from "@angular/core";
import { ResolveEnd, ResolveStart, Router } from "@angular/router";
import { filter, map, merge, Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  //!Loading
  isLoading!: Observable<boolean>;
  private _showLoaderEvent$!: Observable<boolean>;
  private _hsideLoaderEvent$!: Observable<boolean>;
  title = "web-peliculas";
  constructor(private router: Router) {}

  ngOnInit(): void {
    this._showLoaderEvent$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveStart),
      map(() => true)
    );

    this._hsideLoaderEvent$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveEnd),
      map(() => false)
    );

    this.isLoading = merge(this._hsideLoaderEvent$, this._showLoaderEvent$);
  }
}
