import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderAppComponent } from './app-component/order-app/order-app.component';

const routes: Routes = [
  { path: 'orders', component: OrderAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
