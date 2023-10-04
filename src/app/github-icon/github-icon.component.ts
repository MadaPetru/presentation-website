import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-github-icon',
  templateUrl: './github-icon.component.html',
  styleUrls: ['./github-icon.component.css']
})
export class GithubIconComponent implements OnInit {

  constructor() {
  }

  numberOfClicksOnGithubLink: number = 0;

  ngOnInit(): void {
  }

  clickGithubLink() {
    this.numberOfClicksOnGithubLink++;
  }
}
