import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { PlainCar } from '../models/plainCar';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44353/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl +"cars/getcardetails");
  }

  getCarDetailByCarId(carId:number):Observable<SingleResponseModel<PlainCar>>{
    let newPath: string = this.apiUrl + "cars/getbycarid?carId=" + carId;
    return this.httpClient.get<SingleResponseModel<PlainCar>>(newPath)
  }

  add(car:Car){
    return this.httpClient.post(this.apiUrl + 'cars/add', car);
  }

  update(car:Car){
    return this.httpClient.post(this.apiUrl + 'cars/update', car);
  }
}
