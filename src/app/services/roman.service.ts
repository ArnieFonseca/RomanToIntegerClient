import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RomanData } from '../interfaces/roman-data'

@Injectable({
  providedIn: 'root'
})
export class RomanService {

  private romanServerURL:string = 'https://localhost:7152/Roman2Int?romanNumber=';

  // Inject the HttpClient
  constructor(private httpClient: HttpClient) { }

  // Call Rest API
  public convertToInteger(romanNumber:string):Observable<RomanData> {

    console.log("Service called",romanNumber )
    let answer = this.httpClient.get<RomanData>(`${this.romanServerURL}${romanNumber.trim()}`)
    return answer

  }
}
