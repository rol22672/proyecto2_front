import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationType, NotificationsService } from 'angular2-notifications';
import { RestTableService } from '../../../services/restTable/rest-table.service';
import { Table } from '../../../models/Table';
import { RestAreaService } from '../../../services/restArea/rest-area.service';
import { OPTIONS } from '../../../models/ConfigNotification';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.scss']
})
export class CreateTableComponent implements OnInit {
  public table:Table;
  public areas:[];
  constructor(public dialogRef: MatDialogRef<CreateTableComponent>, private notification:NotificationsService,
    @Inject(MAT_DIALOG_DATA) public data: any, private restTable:RestTableService, private restArea:RestAreaService) { 
      this.table = new Table(null, null,null,true,true,null);
      this.get();
    }

  ngOnInit(): void {
  }


  get(){
    this.restArea.get().subscribe((res:any)=>{
      if(res.area){
        this.areas = res.area;
      }
    }, error =>{
      this.restTable.handleErrors(error);
    })
  }
  

  save(){
    this.restTable.save(this.table).subscribe((res:any)=>{
      if(res.table){
        
        this.notification.create("Operación Exitosa", res.message,NotificationType.Success, OPTIONS,"");
        this.dialogRef.close();
      }
    }, error=>{
      this.restTable.handleErrors(error);
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
