import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { LinkListDirective } from "../directivas/link-list.directive";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { NavigationComponent } from "../navigation/navigation.component";
import { MoviesService } from "src/app/services/movies.service";
import { IGender } from "src/app/models/gender.model";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatRippleModule,
    MatIconModule,
    LinkListDirective,
    NavBarComponent,
    NavigationComponent,
  ],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  protected show: boolean = false;
  protected genders: IGender[] = [];

  constructor(private moviesSer: MoviesService) {}

  public toogle() {
    this.show = !this.show;
  }

  ngOnInit(): void {
    this.moviesSer.getGendersList().subscribe((resp) => {
      this.genders = resp.genres;
    });
  }
}
