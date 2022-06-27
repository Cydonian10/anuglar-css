import { Component, Inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-error",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"],
})
export class ErrorComponent {
  constructor(
    public dialogRef: MatDialogRef<ErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}
}
