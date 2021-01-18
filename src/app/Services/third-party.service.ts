import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ThirdPartyWebReqService } from "./third-party-web-req.service";
@Injectable({
  providedIn: 'root'
})
export class ThirdPartyService {

  readonly ROOT_URL;
  readonly API_ROOT_URL;
  apikey: string;

  constructor(private thirdPartyWebReqService: ThirdPartyWebReqService) {
    this.ROOT_URL = 'http://localhost:3000';
    this.API_ROOT_URL = 'https://cricapi.com/api';
    //this.apikey = "TQQzGg79EMejSb85ltL2bo8wLSf1";
    this.apikey = 'XQkPSzzPZJQqKtc4vc9dIxIL5uM2';
   }

  getMatch() {
    return this.thirdPartyWebReqService.post(`${this.API_ROOT_URL}/matches`, { 'apikey': this.apikey });
  }
  getSquad(unique_id: string) {
    return this.thirdPartyWebReqService.post(`${this.API_ROOT_URL}/fantasySquad`, { 'apikey':this.apikey, 'unique_id': unique_id});
  }
  getPeformance( unique_id: string) {
    return this.thirdPartyWebReqService.post(`${this.API_ROOT_URL}/fantasySummary`, { 'apikey':this.apikey, 'unique_id': unique_id });
  }
  
}
