import { Component, OnInit } from '@angular/core';
import { RepoService } from '../../services/repo.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-repo-data',
  templateUrl: './repo-data.component.html',
  styleUrls: ['./repo-data.component.css']
})

export class RepoDataComponent implements OnInit {
  issues: any = [];

  constructor(private repoService: RepoService) { }

  ngOnInit() {
    this.repoService.getRepoData()
      .subscribe( res => this.issues = res );
  }

}
