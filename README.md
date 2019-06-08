# {Web App: A simple Github search app}

#### {Brief description of application}, {Fri 7, June 2019}

#### By **{Feven Moghes Weldu}**

## Description

This project is a web app that uses GitHub API to provide a basic GitHub search facility. You can search by user or reporsitory names.

## Live Web App

Here is a working live demo:

{GhPages Link}

## Setup/Installation Requirements

1) clone the repository from GitHub

$ git clone {GitHub repository URL}

2) open termial and change to cloned repository 

$ cd {repo-name}

3) open project in VS Code

$ code .

4) run the app

ng serve -o

The app will open in a new browser.

## Known Bugs

No bugs identified yet. If you find a bug please give us your feedback using the contact details provided below.

## Technologies Used

1) Angular 7 and Angular CLI
2) Bootstrap
3) Typescript, HTML and CSS 
4) GitHub API
5) Node 8
6) Visual Studio Code
7) Ubuntu

## Support and contact details

Your feedback is welcome at Feven Weldu <feven.m.weldu@gmail.com>

Contributions are also encouraged. Fork the GitHub repository to your own space, make your changes and send a pull request.

### License
MIT License

Copyright (c) [2019] [Feven Moghes Weldu]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Notes

### How to make API call using HttpClient

1) Import ClientHttpModule in app.module.ts

2) Inject HttpClient in component/service constructor where you need to make API call

constructor(private http: HttpClient){}

3) declare field to bind with input form

search: string;

4) generate classes to hold API result (number of classes to hold result depends on structure of JSON returned by API)

ng generate class search-response

ng generate class user

5) declare field to hold result of API call

res: SearchResponse;

6) create method to make API call

doSearch(): SearchResponse {

}

7) make API call

doSearch(): SearchResponse {
    // prepare API URL
    url = '' + this.search
    
    // call API and store result
    this.http.get<SearchResponse>(url)
        .subscribe(data => this.res = data);
}