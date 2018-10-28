import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchdetailsComponent } from './matchdetails/matchdetails.component';
import { FootballmatchesComponent } from './footballmatches/footballmatches.component';
import {HttpClientModule} from '@angular/common/http';
import { GroupbyPipe } from './groupby.pipe';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FootballmatchesComponent,
    MatchdetailsComponent,
    GroupbyPipe,
    TeamdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
