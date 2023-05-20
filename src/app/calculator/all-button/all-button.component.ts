import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-button',
  templateUrl: './all-button.component.html',
  styleUrls: ['./all-button.component.css']
})

export class AllButtonComponent {
  @Input() name!:string;
  @Input() id!:string;
  @Input() value!:string;
  

}
