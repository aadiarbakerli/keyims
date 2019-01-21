import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private static readonly MONOLITH_URL = '/keyims';
  constructor() { }

  public getURL() {
    return UrlService.MONOLITH_URL;
  }
}
