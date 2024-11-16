import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntegerRomanData } from '../interfaces/integer-roman-data';
 

@Injectable({
  providedIn: 'root'
})
export class IntegerRomanService {

  private romanServerURL:string = 'https://localhost:7152/Int2Roman?number=';

  // Inject the HttpClient
  constructor(private httpClient: HttpClient) { }

  // Call Rest API
  public convertToRoman(inputNumber:number):Observable<IntegerRomanData> {

    console.log("Service called",inputNumber )
    let answer = this.httpClient.get<IntegerRomanData>(`${this.romanServerURL}${inputNumber}`)
    return answer

  }
}
