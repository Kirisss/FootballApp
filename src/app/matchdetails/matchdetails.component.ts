import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/services/football.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.scss']
})
export class MatchdetailsComponent implements OnInit {
  idmatch:number;
  resultDetails:any;
  constructor(private footballService: FootballService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.idmatch = params.matchid);
    this.footballService.getDettagliMatch(this.idmatch).subscribe((data: any) => {
      //creare indici tabelle
      this.resultDetails=data.match;

    });;
  }

}


