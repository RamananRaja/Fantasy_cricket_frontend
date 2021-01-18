import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchContestComponent} from './Pages/match-contest/match-contest.component'
import { MyContestComponent } from "./Pages/my-contest/my-contest.component";
import { SelectTeamComponent } from "./Pages/select-team/select-team.component";
import { SignupComponent } from "../app/Pages/signup/signup.component";
import { LoginComponent } from './Pages/login/login.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { LeaderboardComponent } from './Pages/leaderboard/leaderboard.component';



const routes: Routes = [
  { path: 'matchcontest', component: MatchContestComponent },
  { path: 'mycontest', component: MyContestComponent },
  { path: 'selectteam', component: SelectTeamComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component:ProfileComponent },
  { path: 'leaderboard', component: LeaderboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
