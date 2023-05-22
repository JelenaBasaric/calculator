import { EventEmitter } from "@angular/core";
import { Observable, first } from "rxjs";

export class calculatorService {
    valueFormula = new EventEmitter<string>();
    valueResult = new EventEmitter<string>();
    numberAndOperationrray:string[]=[]
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
            if (this.formula.endsWith("+- ") || this.formula.endsWith("/- ") || this.formula.endsWith("*- ") || this.formula.endsWith("-- ")) { return; }
            else if (this.formula.endsWith(" - ") || this.formula.endsWith(" / ") || this.formula.endsWith(" * ") || this.formula.endsWith(" + ")) {
                this.formula =this.formula.trimEnd().replace(/.$/, value+" ");
               // this.formula = this.formula.replace(/.$/, value+" ");
                this.valueFormula.emit(this.formula); return;
            }

            else {
                this.formula +=" "+ value+" ";
                this.valueFormula.emit(this.formula);
            }
        }
        else {
            if (this.formula.endsWith("+- ") || this.formula.endsWith("/- ") || this.formula.endsWith("*- ") || this.formula.endsWith("-- ")) { return; }
            else if (this.formula.endsWith(" - ") || this.formula.endsWith(" / ") || this.formula.endsWith(" * ") || this.formula.endsWith(" + ")) {
                this.formula=this.formula.trimEnd()+value+" ";
              //  this.formula += value+" ";
                this.valueFormula.emit(this.formula); return;
            }
            else {
                this.formula +=" "+ value+" ";
                this.valueFormula.emit(this.formula);
            }
        }




    }
    equalsAll() {
        if(this.formula.includes('.')){
            this.numberAndOperationrray=this.formula.split(" ");
            this.resultAll=parseFloat(this.formula);
            for(let i=0;i<this.numberAndOperationrray.length;i++){
            console.log(this.numberAndOperationrray[i]);
           // this.resultAll+=parseFloat(this.numberAndOperationrray[i]);
            if(this.numberAndOperationrray[i].startsWith('*'))

            {let m=parseFloat(this.numberAndOperationrray[i-1]);
                let n=parseFloat(this.numberAndOperationrray[i-1]);
                let r=m*n;
            }
            this.resultAll+=r;
        }
         console.log(this.resultAll);
        
           // this.result=(this.resultAll.toString());
            //this.formula="0";
            //this.valueResult.emit(this.result);
            //this.valueFormula.emit(this.formula);
        }
        else{
            this.numberAndOperationrray=this.formula.split(" ");
            //this.resultAll=parseFloat(this.formula);
            for(let i=0;i<this.numberAndOperationrray.length;i++){
            console.log(this.numberAndOperationrray[i]);}
            // this.resultAll=(parseInt(this.formula));
            // console.log(this.resultAll);
            // this.result=(this.resultAll.toString());
            // this.formula="0";
            // this.valueResult.emit(this.result);
            // this.valueFormula.emit(this.formula);
        }
      


    }
    deleteAll() {
        this.formula = "0";
        this.valueFormula.emit(this.formula);
    }
}