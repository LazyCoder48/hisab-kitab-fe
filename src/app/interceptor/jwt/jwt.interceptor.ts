import {Injectable}                                           from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable}                                           from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log("url", request.url);
        if (localStorage.getItem('rapd_jwt')) {
            const clonedRequest: HttpRequest<any> = request.clone(
                {
                    setHeaders: {
                        Authorization: `Bearer ${localStorage.getItem('rapd_jwt')}`,
                    }
                }
            );
            return next.handle(clonedRequest);
        }
        return next.handle(request);
    }
}

