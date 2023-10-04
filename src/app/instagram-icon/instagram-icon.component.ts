import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-instagram-icon',
  templateUrl: './instagram-icon.component.html',
  styleUrls: ['./instagram-icon.component.css']
})
export class InstagramIconComponent implements OnInit {

  constructor() {
  }

  numberOfClicksOnInstagramLink: number = 0;

  ngOnInit(): void {
  }

  clickInstagramLink() {
    this.numberOfClicksOnInstagramLink++;
  }

}
