import { Component, Inject, OnInit } from '@angular/core';
import { OrderDish } from '../../../models/orderDish';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationType, NotificationsService } from 'angular2-notifications';
import { RestDishService } from '../../../services/restDish/rest-dish.service';
import { RestOrderService } from '../../../services/restOrder/rest-order.service';
import { OPTIONS } from '../../../models/ConfigNotification';

@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.scss']
})
export class CreateDishComponent implements OnInit {

  public orderDish:OrderDish;
  public dishes:[];
  constructor(public dialogRef: MatDialogRef<CreateDishComponent>, private notification:NotificationsService,
    @Inject(MAT_DIALOG_DATA) public data: any, private restDish:RestDishService, private restOrderDish:RestOrderService) { 
      this.orderDish = new OrderDish(null, null,null,null);
      this.get();
    }

  ngOnInit(): void {
  }


  get(){
    this.restDish.get().subscribe((res:any)=>{
      if(res.plato){
        this.dishes = res.plato;
        console.log(this.dishes)
      }
    }, error =>{
      this.restOrderDish.handleErrors(error);
    })
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
  
  save(){
    this.orderDish.mesaid = this.data.mesaid;
    this.restOrderDish.saveOrderPlato(this.orderDish).subscribe((res:any)=>{
      if(res.order){
        this.notification.create("Operación Exitosa", res.message,NotificationType.Success, OPTIONS,"");
        this.dialogRef.close();
      }
    }, error=>{
      this.restOrderDish.handleErrors(error);
    })
  }

}
