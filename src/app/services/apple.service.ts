import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppleService {
  // URL di DummyJSON per cercare prodotti
  private url = 'https://dummyjson.com/products/search?q=iphone';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    // Basta una semplice GET senza chiavi!
    return this.http.get(this.url);
  }
}