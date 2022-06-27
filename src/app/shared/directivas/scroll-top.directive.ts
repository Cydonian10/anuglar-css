import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appScrollTop]",
  standalone: true,
})
export class ScrollTopDirective {
  @HostListener("click")
  onScrollTop() {
    window.scrollTo(0, 0);
  }

  constructor(private element: ElementRef<HTMLButtonElement>) {
    this.element.nativeElement.classList.add("button-top");
  }
}
