import { Component, OnInit } from '@angular/core';
import { ThirdPartyService } from "../../Services/third-party.service";
import { Router } from "@angular/router";
import { TaskServiceService } from "../../Services/task-service.service";
import { AuthService } from '../../Services/auth.service';
@Component({
  selector: 'app-match-contest',
  templateUrl: './match-contest.component.html',
  styleUrls: ['./match-contest.component.scss']
})
export class MatchContestComponent implements OnInit {

  available_Matches: Object;

  constructor(private thirdPartyService: ThirdPartyService, private router: Router, private taskService: TaskServiceService, private authService: AuthService) { }

  ngOnInit(): void {
    this.thirdPartyService.getMatch().subscribe((res: any) => {
      console.log(res);
      this.available_Matches = res['matches'];
      this.taskService.saveMatch(this.available_Matches).subscribe((res: any) => {
        //console.log(res);
      });
    })

    //sessionStorage.clear();
  }

  onJoinContestClicked(match: Object) {
    sessionStorage.setItem("matchArray", JSON.stringify(match));
    this.router.navigate(['/selectteam']);
    
    localStorage.setItem("team_1", match['team-1']);
    localStorage.setItem("team_2", match['team-2']);
    //console.log("selected match: ", match['team-1']);
    //console.log("selected match: ", match['team-2']);
  }

  logout() {
    this.authService.logout();
  }
}
