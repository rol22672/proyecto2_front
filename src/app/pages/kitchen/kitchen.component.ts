import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarkDoneComponent } from './mark-done/mark-done.component';
import { MarkPendingComponent } from './mark-pending/mark-pending.component';
import { RestDishService } from '../../services/restDish/rest-dish.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {
  public dishes:[];
  constructor(private dialog:MatDialog, private restDish:RestDishService, private notification:NotificationsService) { 
    this.dishPending();
  }

  ngOnInit(): void {
  }


  dishDone(){
    this.restDish.getOrderDishDone().subscribe((res:any)=>{
      if(res.dish){
        this.dishes = res.dish;
      }else{
        this.dishes=[];
      }
    }, error =>{
      this.restDish.handleErrors(error);
    })
  }

  dishPending(){
    this.restDish.getPending().subscribe((res:any)=>{
      if(res.dish){
        this.dishes = res.dish;
        console.log(this.dishes)
      }else{
        this.dishes=[];
      }
    }, error =>{
      this.restDish.handleErrors(error);
    })
  }


  markDone(dish:any){
    this.restDish.checkDone(dish.ordenid).subscribe((res:any)=>{
      if(res.dish){
        this.dishPending();
      }else{
      }
    }, error =>{
      this.restDish.handleErrors(error);
    })
  }


  markPending(dish:any){
    this.restDish.checkPending(dish.ordenid).subscribe((res:any)=>{
      if(res.dish){
        this.dishPending();
      }else{
      }
    }, error =>{
      this.restDish.handleErrors(error);
    })
  }

}
