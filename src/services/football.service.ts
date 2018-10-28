import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
  
    'X-Auth-Token': 'bddca8e692e24bd98fe5f92b78f855ee'
    
  })
}

@Injectable({
  providedIn: 'root'
})
export class FootballService {
 


  constructor(private http: HttpClient) { }
 
  public getDatiMatches() {

    return this.http.get('https://api.football-data.org/v2/competitions/SA/matches',httpOptions);
 }

 public getTeam(id:number) {

  return this.http.get('http://api.football-data.org/v2/teams/'+id,httpOptions);
}

 public getDettagliMatch(id:number) {

  return this.http.get('http://api.football-data.org/v2/matches/'+id,httpOptions);
}

}
