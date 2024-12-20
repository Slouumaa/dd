import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  url = 'http://localhost:3000/';
  constructor(private _http:HttpClient) {}

  get<T>(endpoint:String, id:number=0){
  return id!=0
  ? this._http.get<T>(`${this.url}${endpoint}/${id}`)
  : this._http.get<T>(`${this.url}${endpoint}`);
  }
  add<T>(endpoint:string,body:any){
    return this._http.post<T>
  
  }
  update(){
  
  }
  delete(){
  
  }


}
