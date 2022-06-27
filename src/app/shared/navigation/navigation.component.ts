import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { LinkListDirective } from "../directivas/link-list.directive";
import { IGender } from "src/app/models/gender.model";
import { RouterModule } from "@angular/router";
import { MatRippleModule } from "@angular/material/core";

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [CommonModule, MatIconModule, LinkListDirective, RouterModule, MatRippleModule],
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @Input() mobile: boolean = false;
  @Input() show: boolean = false;
  @Input() genders: IGender[] = [];

  constructor() {}
}
