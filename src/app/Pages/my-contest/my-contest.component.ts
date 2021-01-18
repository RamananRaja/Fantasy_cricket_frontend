import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/Services/task-service.service';
import { ThirdPartyService } from 'src/app/Services/third-party.service';
import { AuthService } from "../../Services/auth.service";
@Component({
  selector: 'app-my-contest',
  templateUrl: './my-contest.component.html',
  styleUrls: ['./my-contest.component.scss']
})
export class MyContestComponent implements OnInit {

  joinedContest: any;
  userId: any;

  constructor(private authService: AuthService, private thirdPartyService: ThirdPartyService, private taskService: TaskServiceService) { }

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

  onRefreshClicked(contest: any) {
      console.log(contest);
      return this.thirdPartyService.getPeformance(contest.contestId).subscribe((res: any) => {
        console.log(res.data);
        return this.taskService.updatePoints(contest, res.data).subscribe((res: any) => {
          console.log(res);
          this.onStart();
        });
      })
  }

  logout() {
    this.authService.logout();
  }

}
