import { Component, OnInit } from '@angular/core';
import { ThirdPartyService } from "../../Services/third-party.service";
import { TaskServiceService } from '../../Services/task-service.service';
import { Router } from '@angular/router';
//import { Players } from 'src/app/models/players.model';

@Component({
  selector: 'app-select-team',
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.scss']
})
export class SelectTeamComponent implements OnInit {

  selectedTeam: any[];
  selectedSquad_0: any[];
  selectedSquad_1: any[];
  selectedPlayers: Array<string>;
  selected_players: string[];
  userId: any;
  contestId: any;
  team_1: any;
  team_2: any;
  userName: any;

  constructor(private thirdPartyService: ThirdPartyService, private taskService: TaskServiceService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.selectedTeam = JSON.parse(sessionStorage.getItem("matchArray"));
    console.log(this.selectedTeam);
    this.selected_players = Array();
    this.thirdPartyService.getSquad(this.selectedTeam['unique_id']).subscribe((res: any) => {
      this.selectedSquad_0 = res['squad'][0];
      this.selectedSquad_0 = this.selectedSquad_0['players'];

      this.selectedSquad_1 = res['squad'][1];
      this.selectedSquad_1 = this.selectedSquad_1['players'];

      console.log(this.selectedSquad_0);
      console.log(this.selectedSquad_1);

      this.userId = localStorage.getItem("userId");
      console.log("userId:",this.userId);

      this.team_1 = localStorage.getItem("team_1");
      this.team_2 = localStorage.getItem("team_2");
      //console.log("team 1:",this.team_1);
      //console.log("team 2:",this.team_2);

      this.userName = localStorage.getItem("userName");
      console.log("userName:",this.userName);

      this.contestId = this.selectedTeam['unique_id'];
      console.log("contestId", this.selectedTeam['unique_id']);
      
    })
  }

  onPlayerClicked(playerName: any) {
    if(this.selected_players.length !== 11) {
      if(this.selected_players.indexOf(playerName) !== -1) {
        const index = this.selected_players.indexOf(playerName);
        this.selected_players.splice(index,1);
      } else {
        this.selected_players.push(playerName);
      }
    }
    console.log(this.selected_players);
  }

  onCreateTeamClicked() {
    if(this.selected_players.length === 11) {
      this.taskService.saveTeam(this.userId, this.userName, this.contestId, this.team_1, this.team_2, this.selected_players).subscribe((res: any) => {
        console.log(res);
      });
      window.alert("Contest Joined");
      console.log('create team button clicked');
      this.router.navigate(['/mycontest']);
    }
    else {
      window.alert("Select 11 players to create team");
    }
  }
}