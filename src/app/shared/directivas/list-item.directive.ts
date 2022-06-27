import { AfterViewInit, Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appListItem]",
  standalone: true,
})
export class ListItemDirective implements AfterViewInit {
  constructor(private element: ViewContainerRef) {}

  ngAfterViewInit(): void {
    console.log(this.element);
  }
}
