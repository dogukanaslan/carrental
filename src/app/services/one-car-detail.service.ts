import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class OneCarDetailService {
  
  apiUrl = 'https://localhost:44353/api/';
  constructor(private httpClient:HttpClient) { }

  getOneCarDetails():Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl +"cars/getcardetails");
  }

  getCarDetailByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + 'cars/getcardetailsbycarid?carId=' + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
