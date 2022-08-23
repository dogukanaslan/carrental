import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  numberOfRentDays = new BehaviorSubject<number>(-1);
  currentNumberOfRentDays = this.numberOfRentDays.asObservable();

  rentPrice = new BehaviorSubject<number>(-1);
  currentRentPrice = this.rentPrice.asObservable();

  isStartDatePicked = new BehaviorSubject<boolean>(false);
  currentIsStartDatePicked = this.isStartDatePicked.asObservable();

  isEndDatePicked = new BehaviorSubject<boolean>(false);
  currentIsEndDatePicked = this.isEndDatePicked.asObservable();
  
apiUrl= 'https://localhost:44353/api/'
  constructor(private httpClient:HttpClient) { }

  getPayments():Observable<ListResponseModel<Payment>>{
    return this.httpClient.get<ListResponseModel<Payment>>(this.apiUrl +"payments/getall");
  }

  addPayment(payment:Payment):Observable<ResponseModel>{
    let newPath = this.apiUrl + "payments/add";
    return this.httpClient.post<ResponseModel>(newPath,payment)
  }

  getNumberOfDays():Observable<number>{
    return this.numberOfRentDays;
  }

  getRentPrice():Observable<number>{
    return this.rentPrice;
  }

  setNumberOfDays(value:number){
    this.numberOfRentDays.next(value);
  }

  setRentPrice(value:number){
    this.rentPrice.next(value);
  }

  getIsStartDatePicked():Observable<boolean>{
    return this.isStartDatePicked;
  }

  startDatePicked(){
    this.isStartDatePicked.next(true);
  }

  getIsEndDatePicked():Observable<boolean>{
    return this.isEndDatePicked;
  }

  endDatePicked(){
    this.isEndDatePicked.next(true);
  }
  
}
