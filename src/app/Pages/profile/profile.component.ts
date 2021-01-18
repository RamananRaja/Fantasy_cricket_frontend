import { Component, OnInit } from '@angular/core';
import { exit } from 'process';
import { TaskServiceService } from 'src/app/Services/task-service.service';
import { AuthService } from "../../Services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userId: any;
  firstName: any;
  lastName: any;
  age: any;
  email: any;
  userName: any;
  constructor(private authService: AuthService, private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
    this.firstName = localStorage.getItem("firstName");
    this.lastName = localStorage.getItem("lastName");
    this.age = localStorage.getItem("age");
    this.userName = localStorage.getItem("userName");
    this.email = localStorage.getItem("email");

    console.log("userId:",this.userId);
    console.log("First name:",this.firstName);
    console.log("Last name:",this.lastName);
    console.log("User name:",this.userName);
    console.log("age:",this.age);
    console.log("email:",this.email);

    
  }

  logout() {
    this.authService.logout();
  }

}
