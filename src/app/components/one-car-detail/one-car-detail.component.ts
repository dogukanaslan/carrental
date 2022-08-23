import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-one-car-detail',
  templateUrl: './one-car-detail.component.html',
  styleUrls: ['./one-car-detail.component.css']
})
export class OneCarDetailComponent implements OnInit {

  oneCarDetails:CarDetail[]=[];
  dataLoaded=false;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  
  constructor(private carDetailSerivce:CarDetailService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailByCarId(params["carId"])
      }
    })
  }
  
  getOneCarDetails(){
    this.carDetailSerivce.getCarDetails().subscribe((response)=>{
      this.oneCarDetails = response.data;
      this.dataLoaded=true;
    })
  }
  
  getCarDetailByCarId(carId:number){
    this.carDetailSerivce.getCarDetailByCarId(carId).subscribe(response => {
      this.oneCarDetails = response.data;
      console.log(this.oneCarDetails[0])
      this.dataLoaded = true;
    })
  }
  
}
