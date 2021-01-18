import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebReqService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
   }

  get(uri: String) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  } 
  
  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  
  patch(uri: String, payload: Object) {           //currently planned for player selection
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }
  

  delete(uri: String) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

  signup(firstName: string, lastName: string, age: number, userName: string, email: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users/signup`, 
      { firstName, lastName, age, userName, email, password },
      { observe: 'response' });
  }

  login(email: string, password: string) { 
    return this.http.post(`${this.ROOT_URL}/users/login`, { email, password }, { observe: 'response' });
  }

}
