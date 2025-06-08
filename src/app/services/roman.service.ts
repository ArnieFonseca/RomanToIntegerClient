import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RomanData } from '../interfaces/roman-data'
import { GetEndpointsService } from './get-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class RomanService {

  //private romanServerURL:string = 'https://localhost:44381/Roman2Int?romanNumber=';
  private serviceName =  '/Roman2Int?romanNumber='

  // Inject the HttpClient
  constructor(private httpClient: HttpClient, private service:GetEndpointsService) { }

  // Call Rest API
  public convertToInteger(romanNumber:string):Observable<RomanData> {
    
    let url =  this.service.getDomain()  

    console.log("Service called",romanNumber )
    let answer = this.httpClient.get<RomanData>(`${url}${this.serviceName}${romanNumber.trim()}`, { withCredentials: true })
    return answer

  }
}
