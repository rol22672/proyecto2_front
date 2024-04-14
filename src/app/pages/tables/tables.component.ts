import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenOrderComponent } from './open-order/open-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { CloseOrderComponent } from './close-order/close-order.component';
import { CreateDishComponent } from './create-dish/create-dish.component';
import { CreateDrinkComponent } from './create-drink/create-drink.component';
import { AssignWaiterComponent } from './assign-waiter/assign-waiter.component';
import { CreateTableComponent } from './create-table/create-table.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }


  createTable(){
    const dialogRef1  = this.dialog.open(CreateTableComponent,{
      data: null    });

   dialogRef1.afterClosed().subscribe(result => {
      
    });
  }

  openOrder(table:any){
    const dialogRef1  = this.dialog.open(OpenOrderComponent,{
      data: table    });

   dialogRef1.afterClosed().subscribe(result => {
      
    });
  }


  viewOrder(table:any){
    const dialogRef1  = this.dialog.open(ViewOrderComponent,{
      data: table    });

   dialogRef1.afterClosed().subscribe(result => {
      
    });
  }


  closeOrder(table:any){
    const dialogRef1  = this.dialog.open(CloseOrderComponent,{
      data: table    });

   dialogRef1.afterClosed().subscribe(result => {
      
    });
  }


  createDish(table:any){
    const dialogRef1  = this.dialog.open(CreateDishComponent,{
      data: table    });

   dialogRef1.afterClosed().subscribe(result => {
      
    });
  }

  createDrink(table:any){
    const dialogRef1  = this.dialog.open(CreateDrinkComponent,{
      data: table    });

   dialogRef1.afterClosed().subscribe(result => {
      
    });
  }

  assignWaiter(table:any){
    const dialogRef1  = this.dialog.open(AssignWaiterComponent,{
      data: table    });

   dialogRef1.afterClosed().subscribe(result => {
      
    });
  }

}
