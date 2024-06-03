import { Component } from '@angular/core';
import { DescriptionBoxComponent } from '../../shared/description-box/description-box.component';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [ DescriptionBoxComponent ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

}
