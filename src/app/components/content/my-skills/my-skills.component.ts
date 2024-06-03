import { Component } from '@angular/core';
import { DescriptionBoxComponent } from '../../shared/description-box/description-box.component';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ DescriptionBoxComponent ],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

}
