import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RepoSearchResponse } from './repo-search-response';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':  'application/json',
    'Authorization': `${environment.githubUser}:${environment.githubToken}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class RepoSearchService {
  
  constructor(private http: HttpClient){}

  searchRepos(search: string){
    let res: RepoSearchResponse

    let url = `${environment.githubRepoSearchBaseUrl}${search}`

    this.http.get<RepoSearchResponse>(url, httpOptions).toPromise().then( data => {
      data => res = data
    });

    return res;
  }
}
