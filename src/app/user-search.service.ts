import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SearchResponse } from './search-response';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':  'application/json',
    'Authorization': `${environment.githubUser}:${environment.githubToken}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  constructor(private http: HttpClient){}

  searchUsers(search: string) : SearchResponse {
    let url = `${environment.githubUserSearchBaseUrl}${search}`
    let res: SearchResponse;

    this.http.get<SearchResponse>(url).subscribe(
      data => res = data
    );

    this.http.get<SearchResponse>(url, httpOptions).toPromise().then(data => {
      res = data;
    });

    return res;
  }
}
