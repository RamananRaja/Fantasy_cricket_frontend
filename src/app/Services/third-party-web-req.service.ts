import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ThirdPartyWebReqService {

  constructor(private http: HttpClient) { }

  post(uri: string, payload: Object) {
    return this.http.post(`${uri}`, payload);
  }
  
}