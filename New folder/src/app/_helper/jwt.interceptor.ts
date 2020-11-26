import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private router: Router, private spinner: NgxSpinnerService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show()

        // add authorization header with jwt token if available
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {

                if (event.body.status && event.body.status === 401) {
                    this.router.navigate(['/login']);
                    localStorage.removeItem('currentUser');
                    return;
                }
                this.spinner.hide();
            }
        }), catchError((response: any) => {

            if (response instanceof HttpErrorResponse) {
                return throwError(response);
            }
        })
        );
    }
}
