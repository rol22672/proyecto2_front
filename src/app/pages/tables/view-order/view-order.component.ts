import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationsService } from 'angular2-notifications';
import { RestOrderService } from '../../../services/restOrder/rest-order.service';
import { Account } from '../../../models/Account';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {


  drinks:[];
  dishes:[];
  account:any;

  constructor(public dialogRef: MatDialogRef<ViewOrderComponent>, private notification:NotificationsService,
    @Inject(MAT_DIALOG_DATA) public data: any, private restorder:RestOrderService)  { 
      this.getDishes();
      this.getDrinks();
      this.getAccount();

      this.account = new Account(null,null, true, null,'',null);

  }

  ngOnInit(): void {
  }


  getAccount(){
    this.restorder.getById(this.data.mesaid).subscribe((res:any)=>{
      if(res.account){
        this.account = res.account[0];
        console.log(this.account)
      }
    }, error =>{
      this.restorder.handleErrors(error);
    })
  }

  getDishes(){
    this.restorder.getOrderDish(this.data.mesaid).subscribe((res:any)=>{
      if(res.order){
        this.dishes = res.order;
      }
    }, error =>{
      this.restorder.handleErrors(error);
    })
  }



  getDrinks(){
    this.restorder.getOrderDrink(this.data.mesaid).subscribe((res:any)=>{
      if(res.order){
        this.drinks = res.order;
      }
    }, error =>{
      this.restorder.handleErrors(error);
    })
  }



  onNoClick(): void {
    this.dialogRef.close();
  }
  

}
