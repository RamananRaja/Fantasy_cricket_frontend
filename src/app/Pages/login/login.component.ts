import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userData: any;
  public userId: any;
  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
    
  }
  onLoginButtonClicked(email: string, password: string) {
    this.userData = this.authService.login(email, password).subscribe((res: HttpResponse<any>) => {
      if(res.status === 200) {
        console.log(res);
        //console.log(res.body._id);
        this.userId = res.body._id;
        localStorage.setItem("userId", res.body._id);
        localStorage.setItem("userName", res.body.userName);
        localStorage.setItem("firstName", res.body.firstName);
        localStorage.setItem("lastName", res.body.lastName);
        localStorage.setItem("age", res.body.age);
        localStorage.setItem("email", res.body.email);
        
        this.router.navigate(['/matchcontest']);
      } else {
        console.log('error in login component.ts');
      }
    })
  }

}
