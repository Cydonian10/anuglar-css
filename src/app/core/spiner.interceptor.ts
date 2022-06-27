import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { finalize, Observable, tap } from "rxjs";
import { SpinerService } from "../services/spiner.service";

@Injectable()
export class SpinerInterceptor implements HttpInterceptor {
  constructor(private spinerServ: SpinerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinerServ.showSpiner();

    return next.handle(request).pipe(finalize(() => this.spinerServ.hideSpiner()));
  }
}
