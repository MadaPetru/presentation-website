import {Component, OnInit} from '@angular/core';
import {PersonInformation} from "../PersonInformation";

@Component({
  selector: 'app-information-table',
  templateUrl: './information-table.component.html',
  standalone: true,
  styleUrls: ['./information-table.component.css']
})
export class InformationTableComponent implements OnInit {

  constructor() {
    this.personInfo = this.buildPersonInfo();
  }

  private buildPersonInfo() {
    let personInformation = new PersonInformation();
    personInformation.age = new Date().getFullYear() - 2003;
    return personInformation;
  }

  personInfo: PersonInformation;

  ngOnInit(): void {
  }

}
