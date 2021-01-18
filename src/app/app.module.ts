import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchContestComponent } from './Pages/match-contest/match-contest.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { MyContestComponent } from './Pages/my-contest/my-contest.component';
import { SelectTeamComponent } from './Pages/select-team/select-team.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { LeaderboardComponent } from './Pages/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchContestComponent,
    LoginComponent,
    SignupComponent,
    MyContestComponent,
    SelectTeamComponent,
    ProfileComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
