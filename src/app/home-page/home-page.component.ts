import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { SearchResponse } from '../search-response';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  search: string;

  res: SearchResponse;

  constructor(private http: HttpClient){}

  doSearch(){
    let url = 'https://api.github.com/search/users?q=' + this.search

    this.http.get<SearchResponse>(url).subscribe(
      data => this.res = data
    );
  }

  ngOnInit() {
  }


}

