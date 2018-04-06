import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class RepoService {
  private url = 'https://api.github.com';

  constructor(private http: Http) {}

  getRepoData() {
    return this.http.get(`${this.url}/repos/angular/angular/issues`).map((res:Response) => res.json());
  }

}
