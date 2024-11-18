import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntegerRomanData } from '../interfaces/integer-roman-data';
import { GetEndpointsService } from './get-endpoints.service';
 

@Injectable({
  providedIn: 'root'
})
export class IntegerRomanService {

  //private romanServerURL:string = 'https://localhost:44381/Int2Roman?number=';
  private serviceName =  '/Int2Roman?number='

  // Inject the HttpClient
  constructor(private httpClient: HttpClient, private service:GetEndpointsService) { }

  // Call Rest API
  public convertToRoman(inputNumber:number):Observable<IntegerRomanData> {

    let url =  this.service.getURL()
    
    console.log("Calling with convertToRoman")
    let answer = this.httpClient.get<IntegerRomanData>(`${url}${this.serviceName}${inputNumber}`)
    return answer
  }
}
