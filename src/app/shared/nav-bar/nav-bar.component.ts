import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { Router, RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-nav-bar",
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  @Output() onToogle = new EventEmitter();

  // !form value
  search = new FormControl("", [Validators.required]);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getSearch();
  }

  toogle() {
    this.onToogle.emit();
  }

  //* Get search and send it as query params
  getSearch() {
    if (this.search.invalid) {
      return;
    }

    this.router.navigate(["/results"], { queryParams: { query: this.search.value } });
  }
}
