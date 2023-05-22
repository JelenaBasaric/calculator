import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { calculatorService } from 'src/calculatorService.service';

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
formula="";
result="";
  ngOnInit(): void {
    this.calculatorService.valueFormula.subscribe(
    (value:string)=>{this.value=value;}
    );
    this.calculatorService.valueResult.subscribe(
      (value:string)=>{this.value=value;}
    );
    
  }
}


