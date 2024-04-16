import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarkDoneDrinkComponent } from './mark-done-drink/mark-done-drink.component';
import { MarkPendingDrinkComponent } from './mark-pending-drink/mark-pending-drink.component';
import { RestDrinkService } from '../../services/restDrink/rest-drink.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  public drinks:[];
  constructor(private dialog:MatDialog, private restDrink:RestDrinkService, private notification:NotificationsService) { 
    this.drinkPending();
  }



  

  ngOnInit(): void {
  }

  drinkPending(){
    this.restDrink.getOrderDrinkPending().subscribe((res:any)=>{
      if(res.drink){
        this.drinks = res.drink;
        console.log(this.drinks)
      }else{
        this.drinks=[];
      }
    }, error =>{
      this.restDrink.handleErrors(error);
    })
  }


  drinkDone(){
    this.restDrink.getOrderDrinkDone().subscribe((res:any)=>{
      if(res.drink){
        this.drinks = res.drink;
      }else{
        this.drinks=[];
      }
    }, error =>{
      this.restDrink.handleErrors(error);
    })
  }


  markDone(drink:any){
    this.restDrink.checkDone(drink.orden_bebida_id).subscribe((res:any)=>{
      if(res.drink){
        this.drinkPending();
      }else{
      }
    }, error =>{
      this.restDrink.handleErrors(error);
    })
  }


  markPending(drink:any){
    this.restDrink.checkPending(drink.orden_bebida_id).subscribe((res:any)=>{
      if(res.drink){
        this.drinkPending();
      }else{
      }
    }, error =>{
      this.restDrink.handleErrors(error);
    })
  }


  
}
