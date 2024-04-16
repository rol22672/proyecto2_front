import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MaterialModule } from './material.module';
import { TablesComponent } from './pages/tables/tables.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { BarComponent } from './pages/bar/bar.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { OpenOrderComponent } from './pages/tables/open-order/open-order.component';
import { ViewOrderComponent } from './pages/tables/view-order/view-order.component';
import { CloseOrderComponent } from './pages/tables/close-order/close-order.component';
import { CreateDishComponent } from './pages/tables/create-dish/create-dish.component';
import { CreateDrinkComponent } from './pages/tables/create-drink/create-drink.component';
import { AssignWaiterComponent } from './pages/tables/assign-waiter/assign-waiter.component';
import { CreateTableComponent } from './pages/tables/create-table/create-table.component';
import { MarkPendingComponent } from './pages/kitchen/mark-pending/mark-pending.component';
import { MarkDoneComponent } from './pages/kitchen/mark-done/mark-done.component';
import { MarkPendingDrinkComponent } from './pages/bar/mark-pending-drink/mark-pending-drink.component';
import { MarkDoneDrinkComponent } from './pages/bar/mark-done-drink/mark-done-drink.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { Report1Component } from './pages/reports/report1/report1.component';
import { Report2Component } from './pages/reports/report2/report2.component';
import { Report4Component } from './pages/reports/report4/report4.component';
import { Report5Component } from './pages/reports/report5/report5.component';
import { Report6Component } from './pages/reports/report6/report6.component';
import { JoinTableComponent } from './pages/tables/join-table/join-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    TablesComponent,
    KitchenComponent,
    BarComponent,
    SidenavComponent,
    OpenOrderComponent,
    ViewOrderComponent,
    CloseOrderComponent,
    CreateDishComponent,
    CreateDrinkComponent,
    AssignWaiterComponent,
    CreateTableComponent,
    MarkPendingComponent,
    MarkDoneComponent,
    MarkPendingDrinkComponent,
    MarkDoneDrinkComponent,
    Report1Component,
    Report2Component,
    Report4Component,
    Report5Component,
    Report6Component,
    JoinTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    SimpleNotificationsModule.forRoot({position:['bottom', 'center']})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
