import { EventEmitter } from "@angular/core";
import { Observable, first } from "rxjs";

export class calculatorService {
    valueFormula = new EventEmitter<string>();
    valueResult = new EventEmitter<string>();
    formula: string = "0";
    numNumberArray:number[]=[];
    result = "0";
    resultAll:number=0;
    value: string = '0';
    numString:string="";
    numNumber:number=0;
    getValues(): any {
        return this.formula;

    }
    setNumber(numString:string):number{
        if (this.numString.includes('.')) {
         this.numNumber=parseFloat(this.numString);
        this.numNumberArray.push(this.numNumber);
        this.resultAll=parseFloat(this.result);
        return this.numNumber;
        }
        else {
        this.numNumber=parseInt(this.numString);
        this.numNumberArray.push(this.numNumber);
        this.resultAll=parseInt(this.result);
        return this.numNumber;
        }
        
    }
    getResult() {
        return this.result;
    }
   
    addValueString(value: string) {

        if (this.formula.endsWith("0") && value != "." && value != "+"
            && value != "-" && value != "*" && value != "/") {
            this.formula = this.formula.replace(/.$/, value);
            this.setNumber(value);
            this.valueFormula.emit(this.formula);
        }
        else {
            this.formula += value;
            this.valueFormula.emit(this.formula);
        }

    }
    addOperationSign(value: string) {
        if (value != "-") {
            if (this.formula.endsWith("+-") || this.formula.endsWith("/-") || this.formula.endsWith("*-") || this.formula.endsWith("--")) { return; }
            else if (this.formula.endsWith("-") || this.formula.endsWith("/") || this.formula.endsWith("*") || this.formula.endsWith("+")) {
                this.formula = this.formula.replace(/.$/, value);
                this.valueFormula.emit(this.formula); return;
            }

            else {
                this.formula += value;
                this.valueFormula.emit(this.formula);
            }
        }
        else {
            if (this.formula.endsWith("+-") || this.formula.endsWith("/-") || this.formula.endsWith("*-") || this.formula.endsWith("--")) { return; }
            else if (this.formula.endsWith("-") || this.formula.endsWith("/") || this.formula.endsWith("*") || this.formula.endsWith("+")) {
                this.formula += value;
                this.valueFormula.emit(this.formula); return;
            }
            else {
                this.formula += value;
                this.valueFormula.emit(this.formula);
            }
        }
        




    }
    equalsAll() {
      console.log(this.result);
      console.log(this.resultAll.toString())
      this.valueResult.emit(this.result);
      this.formula="0";


    }
    deleteAll() {
        this.formula = "0";
        this.valueFormula.emit(this.formula);
        this.numNumberArray=[];
        this.resultAll=0;

    }
}