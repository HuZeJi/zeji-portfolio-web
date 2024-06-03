import { Component } from '@angular/core';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [GeneralInfoComponent, ContentComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  schemas: []
})
export class LayoutComponent {

}
