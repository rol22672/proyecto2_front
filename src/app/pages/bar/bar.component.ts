import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarkDoneDrinkComponent } from './mark-done-drink/mark-done-drink.component';
import { MarkPendingDrinkComponent } from './mark-pending-drink/mark-pending-drink.component';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  drinkPending(){

  }


  drinkDone(){

  }


  markDone(drink:any){
    const dialogRef1  = this.dialog.open(MarkDoneDrinkComponent,{
      data: drink    });

   dialogRef1.afterClosed().subscribe(result => {
      
    });
  }



  markPending(drink:any){
    const dialogRef1  = this.dialog.open(MarkPendingDrinkComponent,{
      data: drink    });

   dialogRef1.afterClosed().subscribe(result => {
      
    });
  }


  
}
