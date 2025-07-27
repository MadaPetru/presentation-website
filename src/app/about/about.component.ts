import { Component, OnInit } from '@angular/core';
import {EducationComponent} from "../education/education.component";
import {InformationTableComponent} from "../information-table/information-table.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [
    EducationComponent,
    InformationTableComponent
  ],
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
