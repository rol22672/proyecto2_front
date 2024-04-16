import { Component, Inject, OnInit } from '@angular/core';
import { OrderDrink } from '../../../models/orderDrink';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationType, NotificationsService } from 'angular2-notifications';
import { RestDrinkService } from '../../../services/restDrink/rest-drink.service';
import { RestOrderService } from '../../../services/restOrder/rest-order.service';
import { OPTIONS } from '../../../models/ConfigNotification';

@Component({
  selector: 'app-create-drink',
  templateUrl: './create-drink.component.html',
  styleUrls: ['./create-drink.component.scss']
})
export class CreateDrinkComponent implements OnInit {

  public orderDrink:OrderDrink;
  public drinks:[];
  constructor(public dialogRef: MatDialogRef<CreateDrinkComponent>, private notification:NotificationsService,
    @Inject(MAT_DIALOG_DATA) public data: any, private restDrink:RestDrinkService, private restOrderDrink:RestOrderService) { 
      this.orderDrink = new OrderDrink(null, null,null,null);
      this.get();
    }

  ngOnInit(): void {
  }


  get(){
    this.restDrink.get().subscribe((res:any)=>{
      if(res.bebida){
        this.drinks = res.bebida;
      }
    }, error =>{
      this.restOrderDrink.handleErrors(error);
    })
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
  
  save(){
    this.orderDrink.mesaid = this.data.mesaid;
    this.restOrderDrink.saveOrderBebida(this.orderDrink).subscribe((res:any)=>{
      if(res.order){
        this.notification.create("Operación Exitosa", res.message,NotificationType.Success, OPTIONS,"");
        this.dialogRef.close();
      }
    }, error=>{
      this.restOrderDrink.handleErrors(error);
    })
  }

}
