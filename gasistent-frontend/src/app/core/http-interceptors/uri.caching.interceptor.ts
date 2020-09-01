import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable} from 'rxjs';
import { CacheRegistrationService } from '../services/cache.registration.service';
import {tap} from 'rxjs/operators';

@Injectable()
export class UriCachingInterceptor implements HttpInterceptor {
  private cachedData = new Map<string, any>();

  constructor(private cacheRegistrationService: CacheRegistrationService) {
  }

  public intercept(httpRequest: HttpRequest<any>, handler: HttpHandler) {

    // Samo ako je GET i ako sam dodao tu rutu
    if (httpRequest.method !== 'GET' || !this.cacheRegistrationService.addedToCache(httpRequest.url)) {
      return handler.handle(httpRequest);
    }

    // Kad treba reset
    if (httpRequest.headers.get('reset-cache')) {
      this.cachedData.delete(httpRequest.urlWithParams);
    }

    const lastResponse = this.cachedData.get(httpRequest.urlWithParams);
    if (lastResponse) {
      // Kad ima vise istih zahteva ka serveru vracam onaj koji je u toku, a u suprotnom kesirane podatke
      return (lastResponse instanceof Observable)
        ? lastResponse : lastResponse.clone().asObservable();
    }

   // Prvo pa muško
    const requestHandle = handler.handle(httpRequest).pipe(
      tap(stateEvent => {
      if (stateEvent instanceof HttpResponse) {
        this.cachedData.set(
          httpRequest.urlWithParams,
          stateEvent.clone()
        );
      }
    }));

    // Cuvam observ ako se dese paralelni zahtevi
    this.cachedData.set(httpRequest.urlWithParams, requestHandle);

    return requestHandle;
  }
}
