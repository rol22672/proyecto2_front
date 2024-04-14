import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TablesComponent } from './pages/tables/tables.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { BarComponent } from './pages/bar/bar.component';

const routes: Routes = [

  {component:LoginComponent, path:""},
  {component:RegisterComponent, path:"register"},
  {component:TablesComponent, path:"waiter/tables"},
  {component:KitchenComponent, path:"waiter/kitchen"},
  {component:BarComponent, path:"waiter/bar"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
