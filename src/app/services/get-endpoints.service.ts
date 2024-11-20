import { Injectable } from '@angular/core'; 
import * as data from '../../../public/assets/end-points.json'

@Injectable({
  providedIn: 'root'
})
export class GetEndpointsService {

  //url:string = "/assets/end-points.json"
  constructor() {}

  public getURL():any{

    return data.endpoints.url 
  }
}