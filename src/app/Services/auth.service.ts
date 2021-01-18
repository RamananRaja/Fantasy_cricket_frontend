import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebReqService } from './web-req.service';
import { shareReplay,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private webReqService: WebReqService, private router: Router) { }

  signup(firstName: string, lastName: string, age: number, userName: string, email: string, password: string) {
    return this.webReqService.signup(firstName, lastName, age, userName, email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        console.log('Successfully SIGNED UP and PLEASE LOGIN TO CONTINUE')
      })
    )
  }

  login(email: string, password: string) { 
    return this.webReqService.login(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => { 
        //the auth token will be in the header of this response
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-tokens'));
        console.log("LOGGED IN!");
      })
    );
  }
  
  logout() {
    this.removeSession();
    this.router.navigate(['/login']);
  }

  getAccessToken() {
    return localStorage.getItem('x-access-token');
  }

  getRefreshToken() {
    return localStorage.getItem('x-refresh-token');
  }

  getUserId() {
    return localStorage.getItem('user-id');
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('x-access-token', accessToken)
  }

  setRefreshToken(refreshToken: string) {
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  private setSession(userId: string, accessToken: string, refreshToken: string) {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  private removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
  }

  getNewAccessToken() {
    return this.http.get(`${this.webReqService.ROOT_URL}/users/me/access-token`, {
      headers: {
        'x-refresh-token': this.getRefreshToken(),
        '_id': this.getUserId()
      },
      observe: 'response'
    }).pipe(
      tap((res: HttpResponse<any>) => {
        this.setAccessToken(res.headers.get('x-access-token'));
      })
    );
  }

}
