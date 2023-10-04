import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-facebook-icon',
  templateUrl: './facebook-icon.component.html',
  styleUrls: ['./facebook-icon.component.css']
})
export class FacebookIconComponent implements OnInit {

  constructor() {
  }

  numberOfClicksOnFacebookLink: number = 0;

  ngOnInit(): void {
  }

  clickFacebookLink() {
    this.numberOfClicksOnFacebookLink++;
  }

}
