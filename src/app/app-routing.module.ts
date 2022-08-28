import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { LoginComponent } from './components/login/login.component';
import { OneCarDetailComponent } from './components/one-car-detail/one-car-detail.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
 {path:"", pathMatch:"full", component:CarDetailComponent},
  {path:"cardetails", component:CarDetailComponent},
  {path:"cardetails/brands/:brandId",component:CarDetailComponent},
  {path:"cardetails/colors/:colorId", component:CarDetailComponent},
  {path:"cardetails/filter/:brandId/:colorId",component:CarDetailComponent},
  {path:"cardetails/:carId",component:OneCarDetailComponent},
  {path:"cardetails/:carId/payment",component:PaymentComponent},
  {path:"cars/add",component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"cars/update/:carId",component:CarUpdateComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
