import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-presentation',
  templateUrl: './person-presentation.component.html',
  styleUrls: ['./person-presentation.component.css']
})
export class PersonPresentationComponent implements OnInit {

  constructor() { }
  personName: string = "Mada Petru Adrian";
  personProfession: string = "Software Developer"

  ngOnInit(): void {
  }

}
