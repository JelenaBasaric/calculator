import { EventEmitter } from "@angular/core";
import { Observable, first } from "rxjs";

export class calculatorService {
    valueFormula = new EventEmitter<string>();
    valueResult = new EventEmitter<string>();
    numberArray: string[] = [];
    formula: string = "0";
    result = "0";
    value: string = '0';
    resultAll: number = 0;
    getValues(): any {
        return this.formula;

    }

    getResult() {
        return this.result;
    }

    showValueString(value: string) {

        if (this.formula.endsWith([] + "0") && value != "." && value != "+"
            && value != "-" && value != "*" && value != "/") {
            this.formula = this.formula.replace(/.$/, value);

            this.valueFormula.emit(this.formula);
        }
        else if (this.formula.endsWith([0 - 9] + "0")) {
            this.formula += value;
            this.valueFormula.emit(this.formula);
        }
        else {
            this.formula += value;
            this.valueFormula.emit(this.formula);
        }

    }
    addOperationSign(value: string) {
        if (this.formula === "0") {
            this.formula = this.result;
        }
        if (value != "-") {
            if (this.formula.endsWith("+- ") || this.formula.endsWith("/- ") || this.formula.endsWith("*- ") || this.formula.endsWith("-- ")) { return; }
            else if (this.formula.endsWith(" - ") || this.formula.endsWith(" / ") || this.formula.endsWith(" * ") || this.formula.endsWith(" + ")) {
                this.formula = this.formula.trimEnd().replace(/.$/, value + " ");
                // this.formula = this.formula.replace(/.$/, value+" ");
                this.valueFormula.emit(this.formula); return;
            }

            else {
                this.formula += " " + value + " ";
                this.valueFormula.emit(this.formula);
            }
        }
        else {
            if (this.formula.endsWith("+- ") || this.formula.endsWith("/- ") || this.formula.endsWith("*- ") || this.formula.endsWith("-- ")) { return; }
            else if (this.formula.endsWith(" - ") || this.formula.endsWith(" / ") || this.formula.endsWith(" * ") || this.formula.endsWith(" + ")) {
                this.formula = this.formula.trimEnd() + value + " ";
                //  this.formula += value+" ";
                this.valueFormula.emit(this.formula); return;
            }
            else {
                this.formula += " " + value + " ";
                this.valueFormula.emit(this.formula);
            }
        }




    }
    equalsAll() {

        this.numberArray = this.formula.split(" ");
        while (this.numberArray.length != 1) {
            for (let i = 0; i < this.numberArray.length; i++) {
                
                if (this.numberArray[i] === "*") {
                    let br = i;
                    let sum = parseFloat(this.numberArray[br - 1]) * parseFloat(this.numberArray[br + 1]);
                    this.numberArray[br - 1] = sum.toString();
                    for (br = i; br <= this.numberArray.length - 3; br++) {
                        this.numberArray[br] = this.numberArray[br + 2];

                    }
                    this.numberArray.length -= 2;

                }
            }
              for (let i = 0; i < this.numberArray.length; i++) {
              
                if (this.numberArray[i] === "*-") {
                    let br = i;
                    let sum = parseFloat(this.numberArray[br - 1]) * parseFloat(this.numberArray[br + 1])*(-1);
                    this.numberArray[br - 1] = sum.toString();
                    for (br = i; br <= this.numberArray.length - 3; br++) {
                        this.numberArray[br] = this.numberArray[br + 2];

                    }
                    this.numberArray.length -= 2;

                }
            }
              for (let i = 0; i < this.numberArray.length; i++) {
              
                if (this.numberArray[i] === "/") {
                    let br = i;
                    let sum = parseFloat(this.numberArray[br - 1]) / parseFloat(this.numberArray[br + 1]);
                    this.numberArray[br - 1] = sum.toString();
                    for (br = i; br <= this.numberArray.length - 3; br++) {
                        this.numberArray[br] = this.numberArray[br + 2];

                    }
                    this.numberArray.length -= 2;

                }
                  for (let i = 0; i < this.numberArray.length; i++) {
                
                if (this.numberArray[i] === "/-") {
                    let br = i;
                    let sum = parseFloat(this.numberArray[br - 1]) / (parseFloat(this.numberArray[br + 1]))*(-1);
                    this.numberArray[br - 1] = sum.toString();
                    for (br = i; br <= this.numberArray.length - 3; br++) {
                        this.numberArray[br] = this.numberArray[br + 2];

                    }
                    this.numberArray.length -= 2;

                }
            }
            }
            for (let i = 0; i < this.numberArray.length; i++) {
        
                if (this.numberArray[i] === "+") {
                    let br = i;
                    let sum = parseFloat(this.numberArray[br - 1]) + parseFloat(this.numberArray[br + 1]);
                    this.numberArray[br - 1] = sum.toString();
                    for (br = i; br <= this.numberArray.length - 3; br++) {
                        this.numberArray[br] = this.numberArray[br + 2];

                    }
                    this.numberArray.length -= 2;

                }
            }
              for (let i = 0; i < this.numberArray.length; i++) {
                
                if (this.numberArray[i] === "+-") {
                    let br = i;
                    let sum = parseFloat(this.numberArray[br - 1]) + (parseFloat(this.numberArray[br + 1])*(-1));
                    this.numberArray[br - 1] = sum.toString();
                    for (br = i; br <= this.numberArray.length - 3; br++) {
                        this.numberArray[br] = this.numberArray[br + 2];

                    }
                    this.numberArray.length -= 2;

                }
            }
              for (let i = 0; i < this.numberArray.length; i++) {
               
                if (this.numberArray[i] === "-") {
                    let br = i;
                    let sum = parseFloat(this.numberArray[br - 1]) - parseFloat(this.numberArray[br + 1]);
                    this.numberArray[br - 1] = sum.toString();
                    for (br = i; br <= this.numberArray.length - 3; br++) {
                        this.numberArray[br] = this.numberArray[br + 2];

                    }
                    this.numberArray.length -= 2;

                }
            }
              for (let i = 0; i < this.numberArray.length; i++) {
              
                if (this.numberArray[i] === "--") {
                    let br = i;
                    let sum = parseFloat(this.numberArray[br - 1]) -( parseFloat(this.numberArray[br + 1])*(-1));
                    this.numberArray[br - 1] = sum.toString();
                    for (br = i; br <= this.numberArray.length - 3; br++) {
                        this.numberArray[br] = this.numberArray[br + 2];

                    }
                    this.numberArray.length -= 2;

                }
            }

        }
        



         this.result = this.numberArray[0];
         this.valueResult.emit(this.result);
         this.formula="0";
         this.valueFormula.emit(this.formula);
        



    }


    deleteAll() {
        this.formula = "0";
        this.valueFormula.emit(this.formula);
    }
}