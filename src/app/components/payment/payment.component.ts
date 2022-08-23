import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { Payment } from 'src/app/models/payment';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  constructor(private paymentService:PaymentService,
    private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService ) 
    {
      
     }

  ngOnInit(): void {
    this.successful();

  }

  successful(){
    this.toastrService.success("Ödeme Başarılı");
  }
} 
