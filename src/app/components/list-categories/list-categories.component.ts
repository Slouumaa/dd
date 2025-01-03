import { Component, ViewChild, OnInit, AfterViewInit, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { Category } from '../../models/categorie';
import { Router } from '@angular/router';
import { TestComponent } from '../test/test.component';
import { CategoryComponent } from '../category/category.component';
import { ConsumerService } from 'src/app/services/consumer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(TestComponent) testComponent!: TestComponent;
  @ViewChild('i') input!: HTMLInputElement;
  @ViewChildren(CategoryComponent) children!: QueryList<CategoryComponent>;
  subscribers!:Subscription;
  categories: Category[] = [];
  constructor(private router: Router, private _consumer:ConsumerService) {}
  ngOnDestroy(): void {
    this.subscribers.unsubscribe;
  }
  ngOnInit(): void {
    this.subscribers=this._consumer.get<Category[]>('categorie').subscribe({
      next:(data) => (this.categories=data),
      error:(e)=>console.log(e),
      complete:()=>console.log('Terminé')
    });
  }
  ngAfterViewInit(): void {
    console.log(this.input);
    console.log(this.testComponent.test);
    this.testComponent.start();
    this.children.forEach((e) => console.log(e));
  }

  title: string = '';

  test: string = '10';

  

  afficheDescription(id: number) {
    //foreach : ES
    this.categories.forEach((element) => {
      if (element.id == id) {
        alert(element.description);
      }
    });
    //filter : ES
    let category = this.categories.filter((element) => element.id == id)[0];
    alert(category.description);
  }

  changeTest() {
    this.test = '12';
  }
  DeleteCategory(event: any) {
    console.log(event);
    this.categories = this.categories.filter((c) => c.id != event);
  }

  toUpdate(c: Category) {
    console.log(JSON.stringify(c));
    this.router.navigate(['/category/update/', JSON.stringify(c)]);
  }
}
