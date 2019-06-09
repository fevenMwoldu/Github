import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { SearchResponse } from '../search-response';
import { UserSearchService } from '../user-search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  search: string;
  res: SearchResponse;

  constructor(private userSearchService: UserSearchService){}

  doSearch(){
    this.res = this.userSearchService.searchUsers(this.search);
  }
  
  ngOnInit() {
  }


}

