import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { SearchResponse } from './search-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github';

  search: string;

  res: SearchResponse;

constructor(private http: HttpClient){}

  doSearch(){
    let url = 'https://api.github.com/search/users?q=' + this.search

    this.http.get<SearchResponse>(url).subscribe(
      data => this.res = data
    );
  }

}
