import { Component, Input } from '@angular/core';
import { calculatorService, } from 'src/calculatorService.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  //ngStyle"{background:rgb(172,57,57);}";
})
export class CalculatorComponent {
 @Input() ngClass!:string;
 @Input() value!:string;
 constructor(private calculatorService:calculatorService){}

 onClickAddValue(value:string){
this.calculatorService.addValueString(value);
 }
}
