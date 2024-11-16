import { Component, viewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppConstants , IntegerRomanConstant} from '../constants/constant';
import { IntegerRomanService } from '../services/integer-roman.service';
import { IntegerRomanData } from '../interfaces/integer-roman-data';

@Component({
  selector: 'app-integer-roman',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './integer-roman.component.html',
  styleUrl: './integer-roman.component.css'
})
export class IntegerRomanComponent {
  public inputNumber:string = AppConstants.Empty
  public msg:string = AppConstants.Empty
  public textMessageColor:string  = AppConstants.Success
  private btnCalculateRef = viewChild<ElementRef<HTMLButtonElement>>(IntegerRomanConstant.BtnCalculate);

  constructor( private service: IntegerRomanService) { }

  onKeydownEvent(e: KeyboardEvent): void {
    this.msg = AppConstants.Empty;                                // Clear message area    
    if (e.key == AppConstants.Enter) {                            // When Enter Key is pressed   
      this.btnCalculateRef()?.nativeElement.click()               // Raise Click Event Reference
    }
  }

  onClickEvent():void{
    
    if (this.validateInput()) {
      const data = this.service.convertToRoman(parseInt(this.inputNumber)) 
      data.subscribe({
        next: (res: IntegerRomanData) => {                      // When Data arrived
          console.log("Result  from Service ", res)
          this.msg = res.answer                                 // Display the data
 
        },
        error: (err: any) => {                                 // When failure
          console.log(err)
          this.textMessageColor = AppConstants.Danger          // Change Color to Error Detected
          this.msg = `${err.name} ${err.message}` }            // Display Server error   
      })      
    }
  }

  validateInput():boolean {
    const arr:string[] =  [...this.inputNumber.trim()]
    const rc:boolean =    arr.every(x => IntegerRomanConstant.numericMask.includes(x))

    this.textMessageColor = AppConstants.Danger                 // Change Color to Error Detected

    if (arr.length == AppConstants.Zero) {                      // When Empty Input
      this.msg = "Input is empty"
      return false
    }
    if (parseInt(this.inputNumber) == AppConstants.Zero) {      // When Zero
      this.msg = "Input cannot be zeros"
      return false
    }
    if (rc == false) {                                          // When invalid number
      this.msg = "Input is not numeric"
      return false

    }

    this.textMessageColor = AppConstants.Success               // Change Color to OK
    return true
  }
}
