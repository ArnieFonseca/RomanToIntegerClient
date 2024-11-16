import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConstants {
    public static readonly Zero:number = 0;
    public static readonly Empty:string = "";
}

@Injectable({
    providedIn: 'root'
})
export class RomanIntegerConstant {
    public static readonly BtnCalculate:string = "btnCalculate";
    public static readonly Enter:string = "Enter";
    public static readonly EnterValidRomanNumber:string ='Please enter a valid Roman Number'
}

@Injectable({
    providedIn: 'root'
})
export class IntegerRomanConstant {
    public static readonly BtnCalculate:string = "btnCalculate";
    public static readonly Enter:string = "Enter";
    public static readonly EnterValidNumber:string ='Please enter a valid Number'
    public static readonly numericMask:string = "0123456789" 
}