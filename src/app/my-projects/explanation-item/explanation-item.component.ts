import { Component, Input } from '@angular/core';
import {ProjectExplanation} from '../projectExplanation.model'
@Component({
  selector: 'app-explanation-item',
  templateUrl: './explanation-item.component.html',
  styleUrls: ['./explanation-item.component.css']
})
export class ExplanationItemComponent {

  @Input() projectExp: ProjectExplanation ;
}

