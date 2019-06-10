import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { SearchResponse } from '../search-response';
import { UserSearchService } from '../user-search.service';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':  'application/json',
    'Authorization': `${environment.githubUser}:${environment.githubToken}`
  })
};

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  search: string;
  res: SearchResponse;

  constructor(private userSearchService: UserSearchService, private http: HttpClient){}

  doSearch(search: string){
    let url = `${environment.githubUserSearchBaseUrl}${this.search}`
    
    this.http.get<SearchResponse>(url, httpOptions).toPromise().then(data => {
      this.res = data;
    });
    //this.res = this.userSearchService.searchUsers(this.search);
  }
  
  ngOnInit() {
  }
}

