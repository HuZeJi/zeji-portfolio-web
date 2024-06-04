import { Component } from '@angular/core';
import { DescriptionBoxComponent } from '../../shared/description-box/description-box.component';
import { BackgroundImageDirective } from '../../../directives/background-image.directive';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [ DescriptionBoxComponent, BackgroundImageDirective ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

}
