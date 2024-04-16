import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationType, NotificationsService } from 'angular2-notifications';
import { RestOrderService } from '../../../services/restOrder/rest-order.service';
import { Account } from '../../../models/Account';
import { OPTIONS } from '../../../models/ConfigNotification';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-open-order',
  templateUrl: './open-order.component.html',
  styleUrls: ['./open-order.component.scss']
})
export class OpenOrderComponent implements OnInit {

  public account:any;
  constructor(public dialogRef: MatDialogRef<OpenOrderComponent>, private notification:NotificationsService,
    @Inject(MAT_DIALOG_DATA) public data: any, private restOrder:RestOrderService)  { 
      this.account = new Account(null,null,true,0,'', null);
      this.account.nombre = '';
      this.account.direccion = '';
      this.account.nit = '';
    }

  ngOnInit(): void {
  }

  open(){
    this.account.mesaid= this.data.mesaid;
    this.account.userid = this.restOrder.getUser().userid;
    this.account.fecha = moment().tz("america/guatemala").format("YYYY-MM-DD");
    this.restOrder.open(this.account).subscribe((res:any)=>{
      if(res.account){
        
        this.notification.create("Operación Exitosa", res.message,NotificationType.Success, OPTIONS,"");
        this.dialogRef.close();
      }
    }, error=>{
      this.restOrder.handleErrors(error);
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
