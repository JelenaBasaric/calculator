import { EventEmitter } from "@angular/core";
import { Observable, first } from "rxjs";

export class calculatorService {
    valueFormula = new EventEmitter<string>();
    valueResult = new EventEmitter<string>();
    formula: string = "0";
    result = "0";
    value: string = '0';
    resultAll:number=0;
    getValues(): any {
        return this.formula;

    }
    
    getResult() {
        return this.result;
    }
   
    addValueString(value: string) {

        if (this.formula.endsWith("0") && value != "." && value != "+"
            && value != "-" && value != "*" && value != "/") {
            this.formula = this.formula.replace(/.$/, value);
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
        if(this.formula.includes('.')){
            this.resultAll=parseFloat(this.formula);
            console.log(this.resultAll);
            this.result=(this.resultAll.toString());
            this.formula="";
            this.valueResult.emit(this.result);
        }
        else{
            this.resultAll=(parseInt(this.formula));
            console.log(this.resultAll);
            this.result=(this.resultAll.toString());
        }
      


    }
    deleteAll() {
        this.formula = "0";
        this.valueFormula.emit(this.formula);
      

    }
}