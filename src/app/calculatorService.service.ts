import { EventEmitter } from "@angular/core";
import { Observable, first } from "rxjs";

export class calculatorService {
    startWithZero = true;
    point = false;
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
    showAndDeleteZero(value: string) {
        if (!this.startWithZero) {
            this.formula += value;
            this.valueFormula.emit(this.formula);
        }
        this.point = false;
        this.startWithZero = true;
    }

    showValueString(value: string) {
        if (this.startWithZero) {
            if (this.formula.endsWith("0") && value != "." && value != "+"
                && value != "-" && value != "*" && value != "/") {
                this.formula = this.formula.replace(/.$/, value);
                this.valueFormula.emit(this.formula);
                this.startWithZero = false;
            }


            else {
                this.formula += value;
                this.startWithZero = false;
                this.valueFormula.emit(this.formula);
            }
        }

        else {

            this.formula += value;
            this.valueFormula.emit(this.formula);

        }


    }
    addPoint(value: string) {
        if (this.point != true) {
            this.point = true;
            this.formula += value;
            this.valueFormula.emit(this.formula);
        }
       
        this.startWithZero = false;


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
                this.point = false;
                this.startWithZero = true;
                this.valueFormula.emit(this.formula); return;
            }


            else {
                this.formula += " " + value + " ";
                this.point = false;
                this.startWithZero = true;
                this.valueFormula.emit(this.formula);
            }
        }
        else {
            if (this.formula.endsWith("+- ") || this.formula.endsWith("/- ") || this.formula.endsWith("*- ") || this.formula.endsWith("-- ")) { return; }
            else if (this.formula.endsWith(" - ") || this.formula.endsWith(" / ") || this.formula.endsWith(" * ") || this.formula.endsWith(" + ")) {
                this.formula = this.formula.trimEnd() + value + " ";
                this.point = false;
                this.startWithZero = true;
                this.valueFormula.emit(this.formula); return;
            }
            else {
                this.formula += " " + value + " ";
                this.startWithZero = true;
                this.point = false;
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
                    let sum = parseFloat(this.numberArray[br - 1]) * parseFloat(this.numberArray[br + 1]) * (-1);
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
                        let sum = parseFloat(this.numberArray[br - 1]) / (parseFloat(this.numberArray[br + 1])) * (-1);
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
                    let sum = parseFloat(this.numberArray[br - 1]) + (parseFloat(this.numberArray[br + 1]) * (-1));
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
                    let sum = parseFloat(this.numberArray[br - 1]) - (parseFloat(this.numberArray[br + 1]) * (-1));
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
        this.formula = "0";
        this.valueFormula.emit(this.formula);
        this.point = false;
        this.startWithZero = true;




    }


    deleteAll() {
        this.formula = "0";
        this.valueFormula.emit(this.formula);
    }
}