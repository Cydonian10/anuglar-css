import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SpinerService } from "src/app/services/spiner.service";

@Component({
  selector: "app-spiner",
  standalone: true,
  templateUrl: "./spiner.component.html",
  styleUrls: ["./spiner.component.scss"],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinerComponent implements OnInit {
  loading: Observable<boolean>;
  constructor(spinerServ: SpinerService) {
    this.loading = spinerServ.show;
  }

  ngOnInit(): void {}
}
