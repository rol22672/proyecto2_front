import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RestTableService } from '../../../services/restTable/rest-table.service';
import { NotificationType, NotificationsService } from 'angular2-notifications';
import { Table } from '../../../models/Table';
import { OPTIONS } from '../../../models/ConfigNotification';

@Component({
  selector: 'app-join-table',
  templateUrl: './join-table.component.html',
  styleUrls: ['./join-table.component.scss']
})
export class JoinTableComponent implements OnInit {

  public tables:[];
  public table:Table;
  constructor(private dialog:MatDialog, private restTable:RestTableService, public dialogRef: MatDialogRef<JoinTableComponent>, private notification:NotificationsService,
    @Inject(MAT_DIALOG_DATA) public data: any ) { 
    this.table = new Table(null, null,null,true,true,null);
    this.get();
  }

  ngOnInit(): void {
  }


  get(){
    this.restTable.showOcupada().subscribe((res:any)=>{
      if(res.table){
        this.tables = res.table;
        console.log(this.tables);
      }
    }, error =>{
      this.restTable.handleErrors(error);
    })
  }


  save(){
    this.restTable.joinMesa(this.table, this.data.mesaid).subscribe((res:any)=>{
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
