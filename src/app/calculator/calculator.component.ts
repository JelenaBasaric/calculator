import { Component, Input } from '@angular/core';
import { onClickServiceAdd } from 'src/onClickAdd.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  //ngStyle"{background:rgb(172,57,57);}";
})
export class CalculatorComponent {
 @Input() ngClass!:string;
 @Input() value!:string;

 constructor( public onClickAddService:onClickServiceAdd){}

onGetValue=(value:number):string=>
{
  return this.onClickAddService.getValue(this.value);

}
onClickSetValue=(value:string):string =>
{
  return this.onClickAddService.setString(this.value)
}
}
