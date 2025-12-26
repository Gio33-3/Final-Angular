import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppleService {
  // URL di DummyJSON per cercare prodotti
  private url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  // Ottieni iPhone tramite ricerca
  getIphones(): Observable<any> {
    return this.http.get(`${this.url}/search?q=iphone`);
  }

  // Ottieni Samsung tramite ricerca
  getSamsungs(): Observable<any> {
    return this.http.get(`${this.url}/search?q=samsung`);
  }
}