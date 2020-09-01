import { Injectable } from '@angular/core';

@Injectable()
export class CacheRegistrationService {
  private services = [];

  public addedToCache(serviceUri: string) {
    return this.services.indexOf(serviceUri) > -1;
  }

  public addToCache(serviceUri: string) {
    if (!this.addedToCache(serviceUri)) {
      this.services.push(serviceUri);
    }
  }
}
