import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { CarrentalService } from 'src/app/services/carrental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

 rentals:RentalDetail[]= [];
  dataLoaded  = false;

  constructor(private rentalService:CarrentalService) { }

  ngOnInit(): void {
  }

}
