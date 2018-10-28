import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/services/football.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.scss']
})
export class TeamdetailsComponent implements OnInit {
  idteam:number;
  idmatch:number;
  resultTeam:any;
  
  constructor(private footballService: FootballService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {this.idmatch = params.matchid;
    this.idteam=params.teamid;});
    this.footballService.getTeam(this.idteam).subscribe((data: any) => {
      //creare indici tabelle
      this.resultTeam=data;

    });;
  }

}
