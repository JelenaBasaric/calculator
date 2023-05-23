import { Component, Input } from '@angular/core';
import { calculatorService, } from 'src/app/calculatorService.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  //ngStyle"{background:rgb(172,57,57);}";
})
export class CalculatorComponent {
 @Input() ngClass!:string;
 
 constructor(private calculatorService:calculatorService){}
 formula=this.calculatorService.getValues();
 result=this.calculatorService.getResult();

 onClickShowValue(value:string){    
this.calculatorService.showValueString(value);
 }
 onClickPoint(value:string){    
  this.calculatorService.addPoint(value);
   }
   onClickShoworDeleteZero(value:string){
    this.calculatorService.showAndDeleteZero(value);
   }
 onClickEquals(){
  this.calculatorService.equalsAll()
 }
 onClickDeleteAll(){
  this.calculatorService.deleteAll();
 }

 addOperationSign(value:string){
  this.calculatorService.addOperationSign(value);
 }
}
