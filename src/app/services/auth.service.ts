import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
import { GetEndpointsService } from './get-endpoints.service';
 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private serviceName =  '/Auth'

  constructor(private httpClient: HttpClient, private service:GetEndpointsService) { }

  /**
   * 
   * @returns boolean true indicated Authorized and false not Authorized
   */
  public isAuthenticated():Observable<boolean>{

    const url =  this.service.getDomain()
    console.log("Calling Authenticator")
    let answer = this.httpClient.get<boolean>(`${url}${this.serviceName}`, { withCredentials: true })
    return answer;
  }
}
