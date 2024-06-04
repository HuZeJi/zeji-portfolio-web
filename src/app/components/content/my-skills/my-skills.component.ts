import { Component } from '@angular/core';
import { DescriptionBoxComponent } from '../../shared/description-box/description-box.component';
import { BackgroundImageDirective } from '../../../directives/background-image.directive';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ DescriptionBoxComponent, BackgroundImageDirective ],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

}
