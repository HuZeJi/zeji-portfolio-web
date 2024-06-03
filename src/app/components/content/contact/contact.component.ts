import { Component } from '@angular/core';
import { DescriptionBoxComponent } from '../../shared/description-box/description-box.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ DescriptionBoxComponent ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
