import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestDishService } from '../../../services/restDish/rest-dish.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-report6',
  templateUrl: './report6.component.html',
  styleUrls: ['./report6.component.scss']
})
export class Report6Component implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  public dishes:[];
  constructor( private restDish:RestDishService, private notification:NotificationsService) { 
    this.generate();
  }

  ngOnInit(): void {
  }

  generate(){
   
    
  

    this.restDish.getreport6().subscribe((res:any)=>{
      if(res.horarios){
        this.dishes = res.horarios;
        console.log(this.dishes)
      }else{
        this.dishes=[];
      }
    }, error =>{
      this.restDish.handleErrors(error);
    })

  }

}
