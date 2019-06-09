import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SearchResponse } from './search-response';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  constructor(private http: HttpClient){}

  searchUsers(search: string) : SearchResponse {
    let url = `${environment.githubUserSearchBaseUrl}${search}`
    let res: SearchResponse;

    this.http.get<SearchResponse>(url).toPromise().then(data => {
      res = data;
    });

    return res;
  }
}
