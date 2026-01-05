import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })//Indica che questa classe può essere "iniettata" in altri componenti o servizi.
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

  // Ottieni quello che vuoi tramite ricerca, cerca direttamente nel api
  searchProducts(query: string): Observable<any> {
    return this.http.get(`${this.url}/search?q=${query}`);// query la mettiamo nella ricerca
  }

  // Ottieni prodotto per ID per il dettaglio del prodotto, detailpage
  getProductById(id: string | number) { //mettiamo stringa o number perche poi nel product detail
    // lo mettiamo come stringa id, quindi cosi evitiamo errori, prende sia id come stringa che come number, riutilizzabili
    // DummyJSON vuole l'URL: https://dummyjson.com/products/1, 
    // qui è products perche lo va a prendere nell'api
    // mentre io ho store
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}