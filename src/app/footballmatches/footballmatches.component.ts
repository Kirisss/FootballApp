import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/services/football.service';


@Component({
  selector: 'app-footballmatches',
  templateUrl: './footballmatches.component.html',
  styleUrls: ['./footballmatches.component.scss']
})
export class FootballmatchesComponent implements OnInit {
  resultQuery:any;
  

  constructor(public footballService: FootballService) { }

  ngOnInit() {

    this.footballService.getDatiMatches().subscribe((data: any) => {
      //creare indici tabelle
      this.resultQuery=data.matches;
/*
     for(let i=0; i<this.resultQuery.length;i++)
     {
      if(this.resultQuery[i].matchday==1) 
      this.tabelle1[i]= {...(this.resultQuery[i])};
      else if(this.resultQuery[i].matchday==2) 
      this.tabelle2[i]={...(this.resultQuery[i])};
     }
  */    
      //alert(this.resultQuery);
     // console.log( this.prova);
      
    });;
  }

}
