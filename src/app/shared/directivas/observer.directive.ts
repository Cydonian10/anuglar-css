import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appObserver]",
  standalone: true,
})
export class ObserverDirective {
  private observer: IntersectionObserver | undefined;

  constructor(private element: ElementRef<HTMLDivElement>) { }

  ngOnInit(): void {
    this.createObserver();
  }

  ngAfterViewInit(): void {
    this.startObserver();
  }

  cargarImage(entry: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entry
      .filter((item) => item.isIntersecting)
      .forEach((item) => {
        item.target.classList.add("visible");
        observer.disconnect();
      });
  }

  private createObserver() {
    this.observer = new IntersectionObserver(this.cargarImage, {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.5,
    });
  }

  private startObserver() {
    this.observer?.observe(this.element.nativeElement);
  }
}
