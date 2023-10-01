import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-adress',
  templateUrl: './email-adress.component.html',
  styleUrls: ['./email-adress.component.css']
})
export class EmailAdressComponent implements OnInit {

  constructor() { }
  emailAddress:string = "mada.petru@digitalexplorer.ro";
  ngOnInit(): void {
  }

}
