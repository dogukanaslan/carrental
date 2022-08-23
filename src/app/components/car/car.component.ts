import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { CarDetail } from 'src/app/models/carDetail';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDetail[] = [];
  dataLoaded = false;
  constructor(
    private carService: CarService,

    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {

  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars= response.data;
      this.dataLoaded = true;
    });
  }
}
