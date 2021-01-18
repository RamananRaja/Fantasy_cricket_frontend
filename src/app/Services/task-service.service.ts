import { Injectable } from '@angular/core';
import { Players } from '../models/players.model';
import {  WebReqService } from "./web-req.service";

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private webReqService: WebReqService) { }

  /*completed(player: Players) {
    return this.webReqService.patch(`team/${player._teamId}/player/${player._id}`, { completed: !player.completed })
  }*/

  saveMatch(matches: any) {
    return this.webReqService.post('contest', { matches });
  }

  saveTeam(userId: any, userName: any, contestId: any, team_1: any, team_2: any, team: any) {
    return this.webReqService.post('team', { userId, userName, contestId, team_1, team_2, team });
  }

  getJoinedContest(userId: any) {
    console.log("get joined contest called");
    return this.webReqService.post('getjoinedcontest', { userId });
  }

  updatePoints(contest: any, data: any) {
    //console.log('came here');
    return this.webReqService.post(`updateContest`, { contest, data });
  }

  leaderContest(contestId: any) {
    return this.webReqService.post(`leadercontest`, { contestId });
  }

}
