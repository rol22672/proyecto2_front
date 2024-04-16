import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TablesComponent } from './pages/tables/tables.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { BarComponent } from './pages/bar/bar.component';
import { Report1Component } from './pages/reports/report1/report1.component';
import { Report2Component } from './pages/reports/report2/report2.component';
import { Report4Component } from './pages/reports/report4/report4.component';
import { Report5Component } from './pages/reports/report5/report5.component';
import { Report6Component } from './pages/reports/report6/report6.component';

const routes: Routes = [

  {component:LoginComponent, path:""},
  {component:RegisterComponent, path:"register"},
  {component:TablesComponent, path:"waiter/tables"},
  {component:KitchenComponent, path:"waiter/kitchen"},
  {component:BarComponent, path:"waiter/bar"},
  {component:Report1Component, path:"waiter/report1"},
  {component:Report2Component, path:"waiter/report2"},
  {component:Report4Component, path:"waiter/report4"},
  {component:Report5Component, path:"waiter/report5"},
  {component:Report6Component, path:"waiter/report6"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
