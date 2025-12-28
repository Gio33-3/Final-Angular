import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppleService } from '../services/apple.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: any;


  constructor(
    private route: ActivatedRoute,
    private appleservice: AppleService) { }

  ngOnInit(): void {
    // Prendi l'id dall'URL
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.appleservice.getProductById(id).subscribe((data) => {
        this.product = data;
      });
    }
  }

}
