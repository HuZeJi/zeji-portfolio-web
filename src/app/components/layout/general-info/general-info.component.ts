import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-general-info',
  standalone: true,
  imports: [ FontAwesomeModule ],
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.scss'
})
export class GeneralInfoComponent {
  constructor( library: FaIconLibrary ) { 
    library.addIcons( faLinkedin, faGithub );
  }
}
