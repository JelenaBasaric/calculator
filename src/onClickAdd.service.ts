export class onClickServiceAdd{
result="";
    value:string='';
    getValue(value:string):string{
        this.value=value;
        return this.value;
    }
    setString(value:string):string{
       return this.result+=value;
    }
}