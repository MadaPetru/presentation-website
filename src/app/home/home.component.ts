import { Component, OnInit } from '@angular/core';
import {PortofolioComponent} from "../portofolio/portofolio.component";
import {ExperienceComponent} from "../experience/experience.component";
import {AboutComponent} from "../about/about.component";
import {PersonPresentationComponent} from "../person-presentation/person-presentation.component";
import {EmailAdressComponent} from "../email-adress/email-adress.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {SocialIconsComponent} from "../social-icons/social-icons.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    PortofolioComponent,
    ExperienceComponent,
    AboutComponent,
    PersonPresentationComponent,
    EmailAdressComponent,
    NavbarComponent,
    SocialIconsComponent
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
