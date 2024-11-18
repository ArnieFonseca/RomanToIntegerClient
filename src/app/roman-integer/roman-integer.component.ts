import { Component, ElementRef, viewChild,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RomanService } from '../services/roman.service' 
import { RomanData } from '../interfaces/roman-data';
import { AppConstants, RomanIntegerConstant } from '../constants/constant';
 

@Component({
  selector: 'app-roman-integer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roman-integer.component.html',
  styleUrl: './roman-integer.component.css',
})
export class RomanIntegerComponent {
  public msg: string =  AppConstants.Empty ;
  public romanNumber: string = AppConstants.Empty;
  public textMessageColor:string  = AppConstants.Success
  private btnCalculateRef = viewChild<ElementRef<HTMLButtonElement>>(RomanIntegerConstant.BtnCalculate);

  // Inject the HttpClient
  constructor( private service: RomanService) { }

  onClickEvent(): void {                                          // Click Event Handler
    
    if (this.romanNumber.trim() == AppConstants.Empty) {          // Verify input for empty string
      this.textMessageColor = AppConstants.Danger
      this.msg = RomanIntegerConstant.EnterValidRomanNumber
    }
    else {                                                        // Otherwise process input
      console.log("Calling Service ", this.romanNumber)
       
      let data = this.service.convertToInteger(this.romanNumber)  // Call Service
      data.subscribe({
        next: (res: RomanData) => {                               // When Data arrived
          console.log("Result  from Service ", res)
          if (res.success == true) {                              // Successful call
            this.textMessageColor = AppConstants.Success
            this.msg = res.answer.toString()                      // Retrieve data     
          }
          else {
            this.textMessageColor = AppConstants.Danger
            this.msg = res.token                                  // Display application error
          }
        },
        error: (err: any) => {                                    // When failure
          console.log(err)
          this.textMessageColor = AppConstants.Danger
          this.msg = `${err.name} ${err.message}` }               // Display Server error   
      })      
    }
  }

  onKeydownEvent(e: KeyboardEvent): void {                        // Key down Event Handler
   
    this.msg = AppConstants.Empty;                                // Clear message area
    if (e.key == AppConstants.Enter) {                            // When Enter Key is pressed   
      this.btnCalculateRef()?.nativeElement.click()               // Raise Click Event Reference
    }
  }

}
