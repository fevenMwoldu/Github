import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  constructor() { }
}
