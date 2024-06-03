import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ AboutMeComponent, MyProjectsComponent, MySkillsComponent, ContactComponent ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  selectedOption = 1;
}
