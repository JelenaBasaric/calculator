import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { calculatorService } from 'src/app/calculatorService.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() id!:string;
  @Input() value!:string;
  @Input() ngClass!:string;
  constructor (private calculatorService:calculatorService){}
formula="0";
result="0";
  ngOnInit(): void {
    this.calculatorService.valueFormula.subscribe(
    (value:string)=>{this.formula=value;}
    );
    this.calculatorService.valueResult.subscribe(
      (value:string)=>{this.result=value;}
    );
    
  }
  isFormulaScreen(id:string):boolean{
    return (id==="formulaScreen")? true:false
  }
}


