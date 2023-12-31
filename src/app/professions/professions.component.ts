import {Component, OnInit} from '@angular/core';
import {Profession} from "../profession";

@Component({
  selector: 'app-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.css']
})
export class ProfessionsComponent implements OnInit {

  professions: Profession[] = [];

  constructor() {
    let x1 = this.buildProfession("Student","Student at the University of Oradea");
    let x2 = this.buildProfession("Backend Developer","Backend developer at Global Logic with over 1 year experience");
    this.professions.push(x1);
    this.professions.push(x2);
  }

  private buildProfession(title: string, description: string) {
    let x = new Profession();
    x.description = description;
    x.title = title;
    return x;
  }

  ngOnInit(): void {
  }

}
