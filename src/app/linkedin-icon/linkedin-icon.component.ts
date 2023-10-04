import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-linkedin-icon',
  templateUrl: './linkedin-icon.component.html',
  styleUrls: ['./linkedin-icon.component.css']
})
export class LinkedinIconComponent implements OnInit {

  constructor() {
  }

  numberOfClicksOnLinkedinLink: number = 0;

  ngOnInit(): void {
  }

  clickLinkedinLink() {
    this.numberOfClicksOnLinkedinLink++;
  }
}
