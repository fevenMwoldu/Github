import { Component, OnInit } from '@angular/core';
import { RepoSearchResponse } from '../repo-search-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':  'application/json',
    'Authorization': `${environment.githubUser}:${environment.githubToken}`
  })
};

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {


  search: string;

  res: RepoSearchResponse;

  constructor(private http: HttpClient){}

  doSearch(){
    let url = 'https://api.github.com/search/repositories?q=' + this.search

    this.http.get<RepoSearchResponse>(url).subscribe(
      data => this.res = data
    );
  }
  

  ngOnInit() {
  }

}
