import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationType, NotificationsService } from 'angular2-notifications';
import { RestOrderService } from '../../../services/restOrder/rest-order.service';
import { OPTIONS } from '../../../models/ConfigNotification';

@Component({
  selector: 'app-close-order',
  templateUrl: './close-order.component.html',
  styleUrls: ['./close-order.component.scss']
})
export class CloseOrderComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CloseOrderComponent>, private notification:NotificationsService,
    @Inject(MAT_DIALOG_DATA) public data: any, private restOrder:RestOrderService)  { }

  ngOnInit(): void {
  }


  close(){
    
    this.restOrder.close(this.data.mesaid).subscribe((res:any)=>{
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
