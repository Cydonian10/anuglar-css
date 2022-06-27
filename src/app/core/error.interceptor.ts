import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { ErrorComponent } from "../shared/components/error/error.component";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(public dialog: MatDialog) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.openDialog("No esta autorizado");
          return throwError(() => "No esta autorizado");
        }
        return throwError(() => console.log(err));
      })
    );
  }

  openDialog(data: string) {
    this.dialog.open(ErrorComponent, {
      width: "250px",
      data,
      enterAnimationDuration: "300ms",
      exitAnimationDuration: "300ms",
    });
  }
}
