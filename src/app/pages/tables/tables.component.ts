import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenOrderComponent } from './open-order/open-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { CloseOrderComponent } from './close-order/close-order.component';
import { CreateDishComponent } from './create-dish/create-dish.component';
import { CreateDrinkComponent } from './create-drink/create-drink.component';
import { AssignWaiterComponent } from './assign-waiter/assign-waiter.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { RestTableService } from '../../services/restTable/rest-table.service';
import { NotificationType, NotificationsService } from 'angular2-notifications';
import { OPTIONS } from '../../models/ConfigNotification';
import { JoinTableComponent } from './join-table/join-table.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  public tables:[];
  constructor(private dialog:MatDialog, private restTable:RestTableService, private notification:NotificationsService ) { 
    this.get();
  }

  ngOnInit(): void {
  }


  get(){
    this.restTable.get().subscribe((res:any)=>{
      if(res.table){
        this.tables = res.table;
        console.log(this.tables);
      }
    }, error =>{
      this.restTable.handleErrors(error);
    })
  }


  createTable(){
    const dialogRef1  = this.dialog.open(CreateTableComponent,{
      data: null    });

   dialogRef1.afterClosed().subscribe(result => {
      this.get();
    });
  }

  openOrder(table:any){
    const dialogRef1  = this.dialog.open(OpenOrderComponent,{
      data: table    });

    dialogRef1.afterClosed().subscribe(result => {
      this.get();
    });
  }


  viewOrder(table:any){
    const dialogRef1  = this.dialog.open(ViewOrderComponent,{
      data: table , width:'100%'   });

    dialogRef1.afterClosed().subscribe(result => {
        this.get();
    });
  }


  closeOrder(table:any){
    const dialogRef1  = this.dialog.open(CloseOrderComponent,{
      data: table    });

    dialogRef1.afterClosed().subscribe(result => {
        this.get();
    });
  }


  createDish(table:any){
    const dialogRef1  = this.dialog.open(CreateDishComponent,{
      data: table    });

    dialogRef1.afterClosed().subscribe(result => {
      this.get();
    });
  }

  createDrink(table:any){
    const dialogRef1  = this.dialog.open(CreateDrinkComponent,{
      data: table    });

    dialogRef1.afterClosed().subscribe(result => {
      this.get();
    });
  }

  assignWaiter(table:any){
    const dialogRef1  = this.dialog.open(AssignWaiterComponent,{
      data: table    });

    dialogRef1.afterClosed().subscribe(result => {
      this.get();  
    });
  }


  joinTable(table:any){
    const dialogRef1  = this.dialog.open(JoinTableComponent,{
      data: table    });

    dialogRef1.afterClosed().subscribe(result => {
      this.get();  
    });
  }

}
