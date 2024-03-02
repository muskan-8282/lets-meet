import { Component } from "@angular/core";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ProfileComponent } from "./profile/profile.component";
import { SigninComponent } from "./signin/signin.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { LoginComponent } from "./login/login.component";
import { JoinMeetupComponent } from "./join-meetup/join-meetup.component";
import { CreateMeetupComponent } from "./create-meetup/create-meetup.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [
    LandingPageComponent,
    ProfileComponent,
    SigninComponent,
    ContactUsComponent,
    LoginComponent,
    JoinMeetupComponent,
    CreateMeetupComponent,
  ],
})
export class AppComponent {
  title = "EncounterBox";
}
