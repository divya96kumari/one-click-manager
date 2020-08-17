import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Hero } from './hero';

const api = '/api';

@Injectable({
    providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){

  }

  adduser(data : any) {
    return this.http.post<any>(`${api}//`, data);
  }

  
}