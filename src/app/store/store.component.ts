import { Component, OnInit } from '@angular/core';
import { AppleService } from '../services/apple.service';
import { ActivatedRoute } from '@angular/router'; // 1. Importa questo

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  iphones: any[] = [];
  samsungs: any[] = [];
  searchResults: any[] = []; //risultati della ricerca riempiono questo array vuoto
  hasSearched!: boolean; // utente ha cercato si o no

  constructor(
    private service: AppleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const query = params['q'];

      if (query) {
        // CASO A: L'utente sta cercando qualcosa
        this.service.searchProducts(query).subscribe((data) => {
          this.searchResults = data.products;
          this.hasSearched = true;

          // Se la ricerca non ha trovato nulla (=== 0), ricarichiamo i prodotti base
          if (this.searchResults.length === 0) {
            this.loadDefaults();
          } else {
            // Se invece abbiamo trovato qualcosa, svuotiamo i default per pulizia
            this.iphones = [];
            this.samsungs = [];
          }
        });
      } else {
        // CASO B: Nessuna ricerca (Pagina Store normale)
        this.searchResults = [];
        this.hasSearched = false;
        this.loadDefaults();
      }
    });
  }

  // Funzione di supporto per caricare i prodotti base
  loadDefaults() {
    this.service.getIphones().subscribe((data) => {
      this.iphones = data.products;
    });

    this.service.getSamsungs().subscribe((data) => {
      this.samsungs = data.products;
    });
  }
}