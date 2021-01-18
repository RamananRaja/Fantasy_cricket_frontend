import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { TaskServiceService } from 'src/app/Services/task-service.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  
  joinedContest: any;
  userId: any;
  usersInMatch: any;
  

  constructor(private authService: AuthService, private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
    console.log("userId:",this.userId);
    //storing joined contest
    this.onStart();
  }

  onStart() {
    this.taskService.getJoinedContest(this.userId).subscribe((res: any) => {
      //console.log("joined contest", res);
      this.joinedContest = res;
      console.log(this.joinedContest);
    });
  }

  onSelectClicked(contestId: any) {
    console.log(contestId);
    this.taskService.leaderContest(contestId).subscribe((res: any)=> {
      console.log(res);
      this.usersInMatch = res;
    });
  }

  logout() {
    this.authService.logout();
  }

}
