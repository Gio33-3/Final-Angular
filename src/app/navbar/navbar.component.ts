import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeSection: | 'store' | 'mac' | 'ipad' | 'iphone' | 'watch' | 'airpods' | 'tv&casa' | 'intrattenimento' | 'accessori' | 'supporto' | null = null;
  isSearchOpen: boolean = false;


  constructor(private router: Router) { }

  // Funzione per mostrare/nascondere la barra
  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  doSearch(event: any) {
    //input effettivo utente
    const query = event.target.value;
    // controlla che non sia un invio vuoto
    if (query.trim()) {
      // naviga verso store e dopo aggiunge i query params, in questo caso la ricerca voluta
      this.router.navigate(['/store'], { queryParams: { q: query } });
      event.target.value = ''; // Pulisce l'input dopo la ricerca
    }
  }

  ngOnInit(): void {
  }


}
