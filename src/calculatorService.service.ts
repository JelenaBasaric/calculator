import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

export class calculatorService {
    valueArrayChanged=new EventEmitter<string[]>();
    valueArray: string []= [];
    result = "";
    value: string = '';
    getValue(value: string): string {
        this.value = value;
        return this.value;
    }
    setResult(value: string): string {
        return this.result += value;
    }
    addValueString(value:string){
        this.valueArray.push(value);
        this.valueArrayChanged.emit(this.valueArray);

    }
    onClickServiceAdd(){}
}