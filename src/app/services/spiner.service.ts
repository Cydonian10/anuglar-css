import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SpinerService {
  public show = new BehaviorSubject<boolean>(false);

  constructor() {}

  showSpiner() {
    this.show.next(true);
  }

  hideSpiner() {
    this.show.next(false);
  }
}
