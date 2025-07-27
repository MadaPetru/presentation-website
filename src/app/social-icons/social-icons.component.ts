import { Component, OnInit } from '@angular/core';
import {GithubIconComponent} from "../github-icon/github-icon.component";
import {LinkedinIconComponent} from "../linkedin-icon/linkedin-icon.component";
import {InstagramIconComponent} from "../instagram-icon/instagram-icon.component";
import {FacebookIconComponent} from "../facebook-icon/facebook-icon.component";
import {LeetcodeIconComponent} from "../leetcode-icon/leetcode-icon.component";

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  standalone: true,
  imports: [
    GithubIconComponent,
    LinkedinIconComponent,
    InstagramIconComponent,
    FacebookIconComponent,
    LeetcodeIconComponent
  ],
  styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
