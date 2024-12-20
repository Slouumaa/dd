import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProdductService {

  constructor() { }
  products : Product[] = [
    {
      id: 1,
      name: 'Refrigérateur LG Inox',
      image: 'assets/images/product1.jpg',
      categoryId: 1,
      description: '',
      price: 2800,
      brand: 'LG',
      promotion: 0,
      nb_likes: 0,
      quantity: 10,
    },
    {
      id: 2,
      name: 'Refrigérateur Samsung Blanc',
      image: 'assets/images/product3.jpeg',
      categoryId: 1,
      description: '',
      price: 2400,
      brand: 'Samsung',
      promotion: 0,
      nb_likes: 0,
      quantity: 10,
    },
    {
      id: 3,
      name: 'Lave vaisselle Beko',
      image: 'assets/images/product4.jpeg',
      categoryId: 1,
      description: '',
      price: 1875,
      brand: 'BEKO',
      promotion: 0,
      nb_likes: 0,
      quantity: 10,
    },
    {
      id: 4,
      name: 'Oppo Smart Phone',
      image: 'assets/images/product5.jpeg',
      categoryId: 4,
      description: '',
      price: 1200,
      brand: 'OPPO',
      promotion: 0,
      nb_likes: 0,
      quantity: 10,
    },
    {
      id: 5,
      name: 'Hachoir',
      image: 'assets/images/product6.jpeg',
      categoryId: 2,
      description: '',
      price: 120,
      brand: 'Moulinex',
      promotion: 0,
      nb_likes: 0,
      quantity: 10,
    },
    {
      id: 6,
      name: "TV 50'' LG",
      image: 'assets/images/product7.jpeg',
      categoryId: 5,
      description: '',
      price: 1800,
      brand: 'LG',
      promotion: 0,
      nb_likes: 0,
      quantity: 10,
    },
  ];
  getProducts(){
    return this.products
  }
  addProduct(product:Product){
    this.products.push(product)
  }
}
