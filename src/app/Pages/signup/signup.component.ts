import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignupButtonClicked(firstName: string, lastName: string, age: number, userName: string, email: string, password: string) {
    this.authService.signup(firstName, lastName, age, userName, email, password).subscribe((res: HttpResponse<any>) => {
      if(res.status === 200) {
        console.log(res);
        this.router.navigate(['/login']);
      }
    })
  }


}
