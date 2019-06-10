import { Component, OnInit } from '@angular/core';
import { RepoSearchResponse } from '../repo-search-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RepoSearchService } from '../repo-search.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(  
    private route: ActivatedRoute,
    private router: Router, 
    private repoSearchService: RepoSearchService, 
    private http: HttpClient){}

  doSearch(search: string){
    let url = `${environment.githubRepoSearchBaseUrl}${search}`

    this.http.get<RepoSearchResponse>(url, httpOptions).toPromise().then( data => {
     this.res = data;
    });

    //this.res = this.repoSearchService.searchRepos(this.search);

  }

  ngOnInit() {
    let username = this.route.snapshot.paramMap.get('username');

    if(username != null){
      this.search = username + '/';
      this.doSearch(this.search);
    } 
  }

}
