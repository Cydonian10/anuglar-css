import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appLinkList]",
  standalone: true,
})
export class LinkListDirective {
  private height = 0;
  private menu: Element | null = null;

  @HostListener("click")
  onClick() {
    this.element.nativeElement.classList.toggle("draw");
    this.height = 0;

    if (this.menu!.clientHeight == 0) {
      this.height = this.menu!.scrollHeight;
    }
    (this.menu as HTMLDivElement).style.height = this.height + "px";
  }

  constructor(private element: ElementRef<HTMLUListElement>) { }

  ngAfterViewInit(): void {
    this.menu = this.element.nativeElement.nextElementSibling;
  }
}
