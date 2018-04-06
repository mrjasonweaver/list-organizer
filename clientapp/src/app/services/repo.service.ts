import { Http, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class RepoService {
  private url = 'https://api.github.com';

  constructor(private http: Http) {}

  getRepoData() {
    return this.http.get(`${this.url}/repos/angular/angular/issues`);
  }

}
