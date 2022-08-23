import { Component, OnInit } from '@angular/core';
import {UntypedFormGroup, UntypedFormBuilder, Validators,} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { PlainCar } from 'src/app/models/plainCar';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  brands:Brand[]=[];
  colors:Color[]=[];

  car: PlainCar = {
    brandId: 0,
    colorId: 0,
    dailyPrice: 0,
    descriptions: "",
    carId: 0,
    modelYear: 0,
  };

  carUpdateForm:UntypedFormGroup;
  constructor(private toastrService:ToastrService,
    private carService:CarService,
    private formBuilder:UntypedFormBuilder,
    private colorService:ColorService,
    private brandService:BrandService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarById(params["carId"]);
    })
    this.createCarUpdateForm();
    this.getBrands();
    this.getColors();
  }

  createCarUpdateForm(){
    this.carUpdateForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      descriptions: ['', Validators.required],
    })
  }
  
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getCarById(carId: number) {
    this.carService.getCarDetailByCarId(carId).subscribe((response) => {
      this.car = response.data;
      this.carUpdateForm.controls['brandId'].setValue(this.car.brandId);
      this.carUpdateForm.controls['colorId'].setValue(this.car.colorId);
      this.carUpdateForm.controls['modelYear'].setValue(this.car.modelYear);
      this.carUpdateForm.controls['dailyPrice'].setValue(this.car.dailyPrice);
      this.carUpdateForm.controls['descriptions'].setValue(this.car.descriptions);
    });
  }

  update() {
    let carModel:PlainCar = Object.assign({id:this.car.carId}, this.carUpdateForm.value);
    if (this.carUpdateForm.valid) {
      this.carService.update(carModel).subscribe((response) => {
          this.toastrService.success("Car is updated successfully.");
        },
        (responseError) => {
          if (responseError.error.Errors) {
            if (responseError.error.Errors.length > 0) {
              for (let i = 0; i < responseError.error.Errors.length; i++) {
                this.toastrService.error(responseError.error.Errors[i]);
              }
            }
          } else {
            this.toastrService.error(responseError.error.Message);
          }
        });
    } else {
      this.toastrService.error("Complete the form!");
    }
  }

}
