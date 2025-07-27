import {Component} from '@angular/core';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ExperienceComponent} from "./experience/experience.component";
import {PortofolioComponent} from "./portofolio/portofolio.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {SocialIconsComponent} from "./social-icons/social-icons.component";
import {EmailAdressComponent} from "./email-adress/email-adress.component";
import {PersonPresentationComponent} from "./person-presentation/person-presentation.component";
import {InstagramIconComponent} from "./instagram-icon/instagram-icon.component";
import {FacebookIconComponent} from "./facebook-icon/facebook-icon.component";
import {TwitterIconComponent} from "./twitter-icon/twitter-icon.component";
import {YoutubeIconComponent} from "./youtube-icon/youtube-icon.component";
import {PinterestIconComponent} from "./pinterest-icon/pinterest-icon.component";
import {InformationTableComponent} from "./information-table/information-table.component";
import {ProfessionsComponent} from "./professions/professions.component";
import {ViewAllWorkButtonComponent} from "./view-all-work-button/view-all-work-button.component";
import {EducationComponent} from "./education/education.component";
import {GithubIconComponent} from "./github-icon/github-icon.component";
import {LinkedinIconComponent} from "./linkedin-icon/linkedin-icon.component";
import {LeetcodeIconComponent} from "./leetcode-icon/leetcode-icon.component";
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent,
    HomeComponent,
    ExperienceComponent,
    PortofolioComponent,
    NavbarComponent,
    SocialIconsComponent,
    EmailAdressComponent,
    PersonPresentationComponent,
    InstagramIconComponent,
    FacebookIconComponent,
    TwitterIconComponent,
    YoutubeIconComponent,
    PinterestIconComponent,
    InformationTableComponent,
    ProfessionsComponent,
    ViewAllWorkButtonComponent,
    EducationComponent,
    GithubIconComponent,
    LinkedinIconComponent,
    LeetcodeIconComponent,
    CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-website';

}
