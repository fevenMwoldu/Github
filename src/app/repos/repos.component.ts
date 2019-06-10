import { Component, OnInit } from '@angular/core';
import { RepoSearchResponse } from '../repo-search-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RepoSearchService } from '../repo-search.service';

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

  search: string = 'fevenmwoldu/';

  res: RepoSearchResponse;

  constructor(private repoSearchService: RepoSearchService, private http: HttpClient){}

  doSearch(search: string){
    let url = `${environment.githubRepoSearchBaseUrl}${search}`

    this.http.get<RepoSearchResponse>(url, httpOptions).toPromise().then( data => {
     this.res = data;
    });

    //this.res = this.repoSearchService.searchRepos(this.search);

  }

  ngOnInit() {
    this.doSearch('fevenmwoldu/')
  }

}
