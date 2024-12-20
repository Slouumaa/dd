import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormRecord, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProdductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
})
export class FormProductComponent implements OnInit {
  product1!: Product;
  product!: FormGroup;
  search!: FormControl;

  constructor(private fb:FormBuilder, private _productService:ProdductService){}
  ngOnInit() {
    this.search = new FormControl();
   
    this.product = this.fb.group({
      name: ["",[Validators.required]],
      image: [],
      description: [],
      price: [],
      brand: this.fb.group({
        name: ["",[Validators.minLength(3),Validators.required]],
        logo: [],
      }),
      promotion: [],
      quantity: [],
      nb_likes: [{values:0,disabled:true}],
      tags: this.fb.array([]),
    });
    /*this.product = new FormGroup({
      name: new FormControl("Test",[Validators.required]),
      image: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      brand: new FormGroup({
        name: new FormControl("",[Validators.minLength(3),Validators.required]),
        logo: new FormControl()
      }),
      promotion: new FormControl(),
      quantity: new FormControl(),
      nb_likes: new FormControl({ value: '0', disabled: true }),
      tags : new FormArray([new FormControl("")])
    });*/
  }

  get name() {
    return this.product.get('name') as FormControl
  }

  get brandName() {
    return this.product.get('brand')!.get('name') as FormControl;
  }

  get tags() : FormControl[] {
    return (this.product.get('tags') as FormArray)!.controls as FormControl[]
  }

  addTags() {
    
    this.tags.push(new FormControl());
  }

  submit() {
    this._productService.addProduct(this.product1);
    console.log((this.product.get('tags') as FormArray).controls)
    console.log(this.product.get('name'))
    console.log(this.product.get('brand')!.get('name'));
    console.log(this.product.getRawValue())
  }
}
