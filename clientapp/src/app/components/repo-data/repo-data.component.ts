import { Component, OnInit } from '@angular/core';
import { RepoService } from '../../services/repo.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-repo-data',
  templateUrl: './repo-data.component.html',
  styleUrls: ['./repo-data.component.css']
})
export class RepoDataComponent implements OnInit {
  private issues: any;
  private headers: any;

  constructor(private repoService: RepoService) { }

  ngOnInit() {
    this.repoService.getRepoData().subscribe(resp => {
      // display its headers
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);

      // access the body directly, which is typed as `Config`.
      this.issues = { ...resp };
      console.log(this.headers);
    });
  }

}
