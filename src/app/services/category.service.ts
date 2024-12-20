import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  a:number=5;
  changeA(){
    this.a=this.a+1;
  }
}
