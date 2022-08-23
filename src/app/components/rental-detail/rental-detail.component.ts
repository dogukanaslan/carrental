import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { CarrentalService } from 'src/app/services/carrental.service';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
  rentals:RentalDetail[] = []
  dataLoaded=false
  constructor(private rentalService:RentalDetailService,private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getRentalDetail();
  }

  getRentalDetail(){
    this.rentalService.getRentalDetail().subscribe(response=>{
      this.rentals = response.data
      this.dataLoaded =true;
    })
  }
}
