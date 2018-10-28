import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FootballmatchesComponent } from './footballmatches/footballmatches.component';
import { MatchdetailsComponent } from './matchdetails/matchdetails.component';
import{TeamdetailsComponent} from './teamdetails/teamdetails.component';

const routes: Routes = [
  {path: 'footballmatches', component: FootballmatchesComponent},
  {path: 'matchdetails/:matchid', component: MatchdetailsComponent},
  {path: 'teamdetails/:matchid/:teamid', component: TeamdetailsComponent},
 {path: '', redirectTo:'/footballmatches' ,pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
