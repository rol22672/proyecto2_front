import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarkDoneComponent } from './mark-done/mark-done.component';
import { MarkPendingComponent } from './mark-pending/mark-pending.component';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }


  dishDone(){

  }

  dishPending(){

  }


  markDone(dish:any){
    const dialogRef1  = this.dialog.open(MarkDoneComponent,{
      data: dish    });

   dialogRef1.afterClosed().subscribe(result => {
      
    });
  }


  markPending(dish:any){
    const dialogRef1  = this.dialog.open(MarkPendingComponent,{
      data: dish    });

   dialogRef1.afterClosed().subscribe(result => {
      
    });
  }

}
