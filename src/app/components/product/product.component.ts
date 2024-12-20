import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProdductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit , OnDestroy {
  search: string = '';
  listProducts: Product[] = [];
  id!: number;
  constructor(private activated: ActivatedRoute, private _productService:ProdductService) {}
  ngOnDestroy() {
    console.log("destroy component");
  }
  ngOnInit() {
    console.log('init component');

    this.listProducts = [];
    this.listProducts=this._productService.getProducts();
    this.id = this.activated.snapshot.params['id'];
    console.log('Snapshot method : ');
    console.log(this.activated.snapshot.params['id']);
    console.log('params :');
    this.activated.params.subscribe({
      next: (p) => console.log(p['id']),
    });
    console.log('paramMap');
    this.activated.paramMap.subscribe({
      next: (p) => console.log(p.get('id')),
    });
    this.listProducts = this.listProducts.filter(
      (pr) => pr.categoryId == this.id
    );
  }

  increment(Product: Product) {
    Product.nb_likes++;
  }

  buy(Product: Product) {
    Product.quantity--;
  }
}
