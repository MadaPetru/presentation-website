import { Component, OnInit } from '@angular/core';
import {ProfessionsComponent} from "../professions/professions.component";

@Component({
  selector: 'app-person-presentation',
  templateUrl: './person-presentation.component.html',
  standalone: true,
  imports: [
    ProfessionsComponent
  ],
  styleUrls: ['./person-presentation.component.css']
})
export class PersonPresentationComponent implements OnInit {

  constructor() { }
  personName: string = "Mada Petru Adrian";
  personProfession: string = "Software Developer"

  ngOnInit(): void {
  }

}
